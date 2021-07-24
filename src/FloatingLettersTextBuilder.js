import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

export const FLOATING_STYLE =
  {
    EASE : "ease",
    EASE_IN :"ease-in",
    EASE_IN_OUT : "ease-in-out"
  }

const Floating = React.memo(({ children, floatStyle, floatSpeed, animationMaxMargin, animationMinMargin  }) => {
  const uid = Math.random().toString(36).slice(-6);
  const floatEffect = `
   @keyframes float-${uid} {
  0% {margin-left: ${animationMaxMargin};}
  100% {margin-left:  ${animationMinMargin};}
  }
 `;
  return (
    <div>
      <style children={floatEffect} />
      <div style={{
        display: "block",
        animation: "float-"+uid+" "+floatSpeed+ "ms "+floatStyle + " forwards"
      }}
      >{children}
      </div>
    </div>
  )
})

export function FloatingLettersTextBuilder({
                                             children,
                                             floatingSpeed,
                                             floatingStyle,
                                             lettersAppearanceDelay,
                                             onAnimationFinished,
                                             letterStyle,
                                             letterSpacing,
                                             animationMinMargin,
                                             animationMaxMargin}) {

  let [content, setContent] = useState([])
  let [counter, setCounter] = useState(null)


  useEffect(() =>
  {
    //start counter
    setCounter(0)
  }, [])

  useEffect(() =>
  {
    if(counter < children?.length - 1)
      setTimeout(() => {setCounter(counter+1)}, lettersAppearanceDelay)
    else
      setTimeout(() => {onAnimationFinished()}, lettersAppearanceDelay)
     setContent(content.concat(children[counter]))
  }, [counter])



  if( typeof children !== "string" )
    throw new Error('only string is supported as child.')
  return <div style={{display :"flex", flexDirection :"row"}}>

    {content.map( (l,i) => <div  key={i} style={l ===" "? {width : letterSpacing, ...letterStyle} : letterStyle}>
      <Floating
      floatStyle = {floatingStyle}
      floatSpeed =  {floatingSpeed}
      animationMinMargin = {animationMinMargin}
      animationMaxMargin =  {animationMaxMargin}>
        {l}
      </Floating>
    </div>)}

  </div>

}


FloatingLettersTextBuilder.propTypes = {
  children : PropTypes.string.isRequired,
  floatingSpeed : PropTypes.number,
  floatingStyle : PropTypes.string,
  lettersAppearanceDelay : PropTypes.number,
  letterStyle : PropTypes.object,
  letterSpacing : PropTypes.string,
  animationMinMargin : PropTypes.string,
  animationMaxMargin : PropTypes.string,

  onAnimationFinished : PropTypes.func

}

FloatingLettersTextBuilder.defaultProps = {
  floatingSpeed : 500,
  lettersAppearanceDelay : 100,
  floatingStyle : FLOATING_STYLE.EASE_IN_OUT,
  letterStyle : {},
  letterSpacing : "4px",

  animationMinMargin : "0px",
  animationMaxMargin : "100px",

  onAnimationFinished : () => {}
}
