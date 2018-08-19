/**
 * @class MotionBlur
 */

import * as React from "react";
import {HTMLAttributes} from "react";


export interface MotionBlurProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactChild;
  active: boolean;
}

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

      if (magnitude < 0.1) {
        magnitude = 0;
      }

      filter.setAttribute("stdDeviation", `${magnitude},0`);

      previousX = x - parentX;
      previousY = y - parentY;
      if (this.props.active) {
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
            bottom: "100%",
            pointerEvents: "none",
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
