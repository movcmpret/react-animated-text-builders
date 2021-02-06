import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types' // ES6

import './styles-builders.css'

export default function BlinkingCursorTextBuilder(props) {
  BlinkingCursorTextBuilder.propTypes = {
    timeout: PropTypes.number,
    cursorStyle: PropTypes.object,
    blinkingSpeed: PropTypes.number,
    cursorComponent: PropTypes.element,
    textStyle: PropTypes.object,
    blinkTimeAfterFinish: PropTypes.number
  }

  const [content, setContent] = useState([])
  const [isBlinking, setIsBlinking] = useState(true)
  const [counter, setCounter] = useState(0)
  const [finishedBlink, setFinishedBlink] = useState(false)

  const timeout = props.timeout ? props.timeout : 100

  const defaultCursorStyle = {
    width: '9px',
    height: '18px',
    background: '#a3a3a3'
  }
  const cursorStyle = props.cursorStyle
    ? { ...defaultCursorStyle, ...props.cursorStyle }
    : defaultCursorStyle

  const blinkingSpeed = props.blinkingSpeed
    ? props.blinkingSpeed
    : props.blinkingSpeed === -1
    ? -1
    : 650
  const blinkingProp =
    blinkingSpeed === -1
      ? null
      : {
          animation: 'opacityOnToOff ' + blinkingSpeed + 'ms linear',
          animationIterationCount: 'infinite'
        }

  let cursor = <div style={cursorStyle} />
  if (props.cursorComponent) cursor = props.cursorComponent

  let textStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 auto'
  }
  if (props.textStyle) textStyle = { ...textStyle, ...props.textStyle }
  useEffect(() => {
    const children = props.children ? props.children : ''
    if (counter < children.length) {
      const letter = children[counter]
      setTimeout(() => {
        let comp = (
          <div
            style={{ display: 'flex' }}
            key={counter + '_' + children[counter]}
          >
            {props.children[counter]}
          </div>
        )
        if (letter === ' ')
          comp = (
            <div
              style={{ marginLeft: ' 5px', display: 'flex' }}
              key={counter + '_' + children[counter]}
            >
              {children[counter]}
            </div>
          )
        setContent(content.concat(comp))
      }, timeout)
      setCounter(counter + 1)
    }
    if (counter === children.length - 1) {
      // last element processed
      if (props.blinkTimeAfterFinish === 0 || !props.blinkTimeAfterFinish) {
        // stop blinking
        setFinishedBlink(true)
        return setIsBlinking(false)
      } else if (props.blinkTimeAfterFinish === -1) return
      else
        setTimeout(() => {
          setIsBlinking(false)
          setFinishedBlink(true)
        }, props.blinkTimeAfterFinish)

      setCounter(counter + 1)
    }
  }, [content])

  const textWrappingComponent = (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={textStyle}>
        {content}
        {finishedBlink ? null : (
          <div style={isBlinking ? blinkingProp : {}}>{cursor}</div>
        )}
      </div>
    </div>
  )

  return <div style={props.style}>{textWrappingComponent}</div>
}
