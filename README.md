# react-motion-blur

> Apply a motion blur visual effect to any element

[![NPM](https://img.shields.io/npm/v/react-motion-blur.svg)](https://www.npmjs.com/package/react-motion-blur)

## Install

```bash
npm install --save react-motion-blur
```

## Usage

```tsx
import * as React from "react";
import {MotionBlur} from "react-motion-blur";


const Example = () => (
  <MotionBlur intensity={2}>
    <img src="https://example.com/image.png"/>
    <div className="whatever-you-want">
      Any HTML content can go in here!
    </div>
    No need for wrappers or anything.
  </MotionBlur>
);
```

## License

MIT © [kroltan](https://github.com/kroltan)
