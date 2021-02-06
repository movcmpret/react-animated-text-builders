# react-animated-text-builders

> A ReactJS library to animate an appearing text.

[![NPM](https://img.shields.io/npm/v/react-animated-text-builders.svg)](https://www.npmjs.com/package/react-animated-text-builders) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

![gif](https://movcmpret.com/demo/animated-text-builders/blink.gif)


[movcmpret.com/demo/animated-text-builders/](https://movcmpret.com/demo/animated-text-builders/)


## Install

```bash
npm install --save react-animated-text-builders
```

## Usage

```jsx
import React, { Component } from 'react'

import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'

class Example extends Component {
  render() {
    return <BlinkingCursorTextBuilder
      textStyle={{fontWeight :"bold", font : "Times New Roman", fontSize : "18px"}}
      style={{transform: "rotate(-10deg)", marginTop:"10px", marginBottom :"10px"}}
      cursorComponent={<div style={{color : "green"}}> Easy to use!</div>}
      blinkTimeAfterFinish={-1}> Easy! </BlinkingCursorTextBuilder>
  }
}
```

## Props

Name | Type | Function
------------ | ------------- | -------------
`timeout` | PropTypes.number | Timeout (speed) per letter
`blinkTimeAfterFinish` | PropTypes.number | Blinking time in ms after animation
`cursorStyle` | PropTypes.object | Styles to be applied to the cursor div
`blinkingSpeed` | PropTypes.number | Blinking speed in ms
`cursorComponent` | PropTypes.element | Custom cursor component (disables `cursorStyle`)
`textStyle` | PropTypes.object | Styles to be applied to the (string) child

## License

MIT © [movcmpret](https://github.com/movcmpret)
