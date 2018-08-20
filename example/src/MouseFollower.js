import React, { Component } from "react";

import {MotionBlur} from "react-motion-blur";


export class MouseFollower extends Component {
  state = {x: 0, y: 0, active: false};

  render () {
    const {x, y, active} = this.state;

    return (
      <div
        className="MouseFollower box"
        onPointerMove={ev => {
          this.setState({
            x: ev.nativeEvent.offsetX,
            y: ev.nativeEvent.offsetY,
          })
        }}
        onPointerEnter={() => this.setState({active: true})}
        onPointerLeave={() => this.setState({active: false})}
      >
        <MotionBlur
          active={active}
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
