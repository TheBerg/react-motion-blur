import React, { Component } from 'react';

import { MotionBlur } from 'react-motion-blur';


export default class App extends Component {
  state = {x: 0, y: 0};

  render () {
    const {x, y} = this.state;

    return (
      <div
        style={{width: "100%", height: "100%"}}
        onMouseMove={ev => this.setState({
          x: ev.clientX,
          y: ev.clientY,
        })}
      >
        <MotionBlur
          active={true}
          radius={10}
          style={{
            position: "absolute",
            top: y,
            left: x,
          }}
        >
          Hello there!
        </MotionBlur>
      </div>
    )
  }
}
