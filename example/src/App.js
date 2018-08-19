import React, {Component, Fragment} from 'react';

import {MouseFollower} from "./MouseFollower";
import {Carousel} from "./Carousel";
import {SideMenu} from "./SideMenu";
import {Demo} from "./Demo";


export default class App extends Component {
  render () {
    return (
      <Fragment>
        <h1>
          react-motion-blur
          <br/>
          demonstrations
        </h1>

        <b>made by <a href="https://kroltan.github.io">kroltan</a></b>
        <b>grab it on <a href="https://github.io/kroltan/react-motion-blur">github</a></b>
        <b>
          demo art by <a href="https://twitter.com/The_Moski">
            moski
          </a> of <a href="http://whalesandgames.itch.io/">
            whales and games
          </a>
        </b>

        <div className="demos-wrapper">
          <Demo
            title="following the cursor"
            description={<Fragment>
              move your pointer within the white area and watch <abbr title="the dragon orb">dragorb</abbr> roll
            </Fragment>}
          >
            <MouseFollower convergence={0.25}/>
          </Demo>

          <Demo
            title="carousel type deal"
            description="try using the horizontal scrollbar"
          >
            <Carousel images={[
              "https://img.itch.zone/aW1hZ2UvMjQ5ODY2LzEzMTk0NjcucG5n/315x250%23c/7qPvz5.png",
              "https://img.itch.zone/aW1hZ2UvMjAyMzYzLzEzMTk0NjMucG5n/315x250%23c/cqpcdd.png",
              "https://img.itch.zone/aW1hZ2UvODI2NDQvMTMxOTQ1OC5naWY=/original/OL9lhu.gif",
              "https://img.itch.zone/aW1hZ2UvMTM4NTI3LzEzMTk0NjQuZ2lm/original/OU7VlA.gif",
            ]}/>
          </Demo>

          <Demo
            title="side menu"
            description="click the hamburger"
          >
            <SideMenu/>
          </Demo>
        </div>
      </Fragment>
    )
  }
}
