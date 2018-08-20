import React from "react";
import {MotionBlur} from "react-motion-blur";


export function SideMenu() {
  return (
    <div className="SideMenu box">
      <button>the hamburger</button>
      <MotionBlur className="SideMenu-menu" intensity={3}>
        some<br/>
        really<br/>
        useful<br/>
        navigation<br/>
        and<br/>
        stuff<br/>
      </MotionBlur>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}
