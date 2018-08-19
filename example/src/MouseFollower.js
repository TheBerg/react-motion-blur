import React, { Component } from "react";

import {MotionBlur} from "react-motion-blur";


export class MouseFollower extends Component {
  state = {x: 0, y: 0};

  render () {
    const {convergence = 0} = this.props;
    const {x, y} = this.state;

    return (
      <div
        className="MouseFollower box"
        onPointerMove={ev => {
          const dx = ev.clientX - x;
          const dy = ev.clientY - y;
          this.setState({
            x: x + dx * convergence,
            y: y + dy * convergence,
          })
        }}
      >
        <MotionBlur
          active={true}
          style={{
            position: "fixed",
            top: y,
            left: x,
          }}
        >
          <img
            alt="Blue dragorb following the mouse cursor"
            src="https://cdn.discordapp.com/emojis/440498174348623884.gif"
          />
        </MotionBlur>
      </div>
    )
  }
}
