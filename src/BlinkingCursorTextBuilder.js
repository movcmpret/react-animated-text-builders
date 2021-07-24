import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types' // ES6

import './styles-builders.css'

const defaultCursorStyle = {
  width: '9px',
  height: '18px',
  background: '#a3a3a3'
}

export default function BlinkingCursorTextBuilder({
  timeout,
  cursorStyle,
  blinkingSpeed,
  cursorComponent,
  textStyle,
  blinkTimeAfterFinish,
  onBlinkingFinished,
  children,
  style
}) {
  const [content, setContent] = useState([])
  const [isBlinking, setIsBlinking] = useState(true)
  const [counter, setCounter] = useState(0)
  const [finishedBlink, setFinishedBlink] = useState(false)

  const cursorStyleC = cursorStyle
    ? { ...defaultCursorStyle, ...cursorStyle }
    : defaultCursorStyle

  const blinkingSpeedC = blinkingSpeed || (blinkingSpeed === -1 ? -1 : 650)
  const blinkingProp =
    blinkingSpeedC === -1
      ? null
      : {
          animation: 'opacityOnToOff ' + blinkingSpeedC + 'ms linear',
          animationIterationCount: 'infinite'
        }

  const blinkFinishedCallback = onBlinkingFinished

  let cursor = <div style={cursorStyleC} />
  if (cursorComponent) cursor = cursorComponent

  let textStyleC = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 auto'
  }
  if (textStyle) textStyleC = { ...textStyleC, ...textStyle }
  useEffect(() => {
    const childrenC = children || ''
    if (counter < childrenC.length) {
      const letter = childrenC[counter]
      setTimeout(() => {
        let comp = (
          <div
            style={{ display: 'flex' }}
            key={counter + '_' + childrenC[counter]}
          >
            {childrenC[counter]}
          </div>
        )
        if (letter === ' ')
          comp = (
            <div
              style={{ marginLeft: ' 5px', display: 'flex' }}
              key={counter + '_' + childrenC[counter]}
            >
              {childrenC[counter]}
            </div>
          )
        setContent(content.concat(comp))
      }, timeout)
      setCounter(counter + 1)
    }
    if (counter === childrenC.length - 1) {
      // last element processed
      if (blinkTimeAfterFinish === 0 || !blinkTimeAfterFinish) {
        // stop blinking
        setFinishedBlink(true)
        blinkFinishedCallback()
        return setIsBlinking(false)
      } else if (blinkTimeAfterFinish === -1) return
      else
        setTimeout(() => {
          setIsBlinking(false)
          setFinishedBlink(true)
          blinkFinishedCallback()
        }, blinkTimeAfterFinish)

      setCounter(counter + 1)
    }
  }, [content])

  const textWrappingComponent = (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={textStyleC}>
        {content}
        {finishedBlink ? null : (
          <div style={isBlinking ? blinkingProp : {}}>{cursor}</div>
        )}
      </div>
    </div>
  )

  return <div style={style}>{textWrappingComponent}</div>
}

BlinkingCursorTextBuilder.propTypes = {
  timeout: PropTypes.number,
  cursorStyle: PropTypes.object,
  blinkingSpeed: PropTypes.number,
  cursorComponent: PropTypes.element,
  textStyle: PropTypes.object,
  blinkTimeAfterFinish: PropTypes.number,
  onBlinkingFinished: PropTypes.func
}

BlinkingCursorTextBuilder.defaultProps = {
  timeout: 100,
  onBlinkingFinished: () => {}
}
