import React from 'react'
import {ShowcaseContainer} from "./Helper";
import {FloatingLettersTextBuilder} from 'react-animated-text-builders'


export default function FloatingLettersTextBuilderExample(props) {

  return <div style={{display : "flex", flexDirection :"row", flex : 1, justifyContent :  "center"}}>
  <div style={{ width : "500px"}}>
    <h2> Floating Letters </h2>
    <ShowcaseContainer>
      <FloatingLettersTextBuilder>
        Floating Text Builder
      </FloatingLettersTextBuilder>
    </ShowcaseContainer>

  </div>
  </div>
}
