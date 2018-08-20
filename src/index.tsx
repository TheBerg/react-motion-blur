import * as React from "react";
import {HTMLAttributes} from "react";


export interface MotionBlurProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Elements to be blurred. Since this is a DOM-based
   * technique, elements within portals to outside this
   * component will not be affected by the effect.
   * */
  children: React.ReactChild;
  /**
   * This parameter controls whether to update the effect.
   * when enabled, the component will update its blur
   * every frame using requestAnimationFrame.
   *
   * You should strive to deactivate the effect whenever
   * possible, since many elements using it can have a
   * significant impact in lower end devices.
   * */
  active: boolean;
  /**
   * The blur effect's strength. By default, the blur scales
   * with the immediate movement speed of the element, but,
   * if provided, this parameter can scale the blur for a
   * subtler or more intense effect.
   * */
  intensity?: number;
}


/**
 * Applies a motion blur effect to the contained components,
 * based on changes in positioning relative to their offset parents.
 * */
export class MotionBlur extends React.Component<MotionBlurProps> {
  private readonly root: React.RefObject<HTMLDivElement>;
  private readonly filter: React.RefObject<SVGFEGaussianBlurElement>;
  private readonly loop: () => void;
  private readonly id: string;
  private angle: number;

  static defaultProps = {
    active: true
  };

  constructor(props: MotionBlurProps) {
    super(props);

    this.id = `react-motion-blur-${Math.floor(Math.random() * 1e7)}`;

    this.root = React.createRef();
    this.filter = React.createRef();

    let previousX = 0;
    let previousY = 0;
    this.loop = () => {
      const root = this.root.current!;
      const filter = this.filter.current!;
      const {top: y, left: x} = root.getBoundingClientRect() as DOMRect;
      const {top: parentY, left: parentX} = root.offsetParent.getBoundingClientRect() as DOMRect;

      const dx = x - parentX - previousX;
      const dy = y - parentY - previousY;

      this.angle = Math.atan2(dy, dx) * 180 / Math.PI;
      let magnitude = Math.sqrt(dx * dx + dy * dy);

      const {active, intensity = 1} = this.props;

      if (magnitude < 0.1 || !active) {
        magnitude = 0;
      }

      filter.setAttribute("stdDeviation", `${magnitude * intensity},0`);

      previousX = x - parentX;
      previousY = y - parentY;
      if (active) {
        requestAnimationFrame(this.loop);
      }
    };
  }

  componentDidMount() {
    this.loop();
  }

  componentDidUpdate({active: wasActive}: MotionBlurProps) {
    if (this.props.active && !wasActive) {
      this.loop();
    }
  }

  render() {
    const {
      children,
      active: _active,
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        <div {...rest} ref={this.root}>
          <div
            style={{
              transform: `rotate(${this.angle}deg)`,
              filter: `url(#${this.id})`
            }}
          >
            <div style={{transform: `rotate(${-this.angle}deg)`}}>
              {children}
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: 0,
            height: 0,
          }}
        >
          <defs>
            <filter id={this.id}>
              <feGaussianBlur
                in="SourceGraphic"
                ref={this.filter}
              />
            </filter>
          </defs>
        </svg>
      </React.Fragment>
    );
  }
}
