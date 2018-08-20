import React, { Component } from "react";

import {MotionBlur} from "react-motion-blur";


export class MouseFollower extends Component {
  state = {x: 0, y: 0};

  render () {
    const {x, y} = this.state;

    return (
      <div
        className="MouseFollower box"
        onPointerMove={ev => {
          this.setState({
            x: ev.nativeEvent.offsetX,
            y: ev.nativeEvent.offsetY,
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
