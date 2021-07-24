import React from 'react'
import {ShowcaseContainer} from "./Helper";
import {FloatingLettersTextBuilder} from 'react-animated-text-builders'


export default function FloatingLettersTextBuilderExample(props) {

  return <div style={{display : "flex", flexDirection :"row", flex : 1, justifyContent :  "center"}}>
  <div style={{ width : "500px"}}>
    <h2> Floating Letters </h2>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder>
        Floating Letters
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder
        floatingSpeed={100}
        lettersAppearanceDelay={50}
      >
        Fast Animation
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder
        floatingSpeed={500}
        lettersAppearanceDelay={250}
      >
        Slow Animation
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder
        floatingSpeed={250}
        lettersAppearanceDelay={500}
      >
        Delayed Letter Appearance
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder
        letterStyle={{color : "#ff5252", fontFamily : "'Brush Script MT', cursive", fontSize :  "1.25rem"}}
      >
        Custom Letter Style
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder
        animationMaxMargin={"200px"}
        animationMinMargin={"5px"}
      >
       Custom Animation Margin
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>
  </div>
  </div>
}
