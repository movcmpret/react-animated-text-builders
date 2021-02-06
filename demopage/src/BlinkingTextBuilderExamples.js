import React from 'react'
import jsxToString from 'jsx-to-string';
import {BlinkingCursorTextBuilder} from 'react-animated-text-builders'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {useState} from "react";

import {IconButton} from "@material-ui/core";
import Code from '@material-ui/icons/Code';


function ShowcaseContainer(props) {

  let [isOpen, setIsOpen] = useState(false)

  return <div style={{maxWidth: "650px"}}>
    <div style={{display: "flex", flexDirection: "row", flex: 1}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        {props.children}
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", flex: 1}}>
        <IconButton
          title={"Show Sourcecode"}
          onClick={() => setIsOpen(!isOpen)}>
          <Code style={{color: "white"}} fontSize={"small"}/>
        </IconButton>
      </div>
    </div>
    {isOpen ? <SyntaxHighlighter language="jsx" style={materialDark}>
      {jsxToString(props.children)}

    </SyntaxHighlighter> : null}
  </div>
}

export default function BlinkingTextBuilderExamples(props) {
  return <div style={{display : "flex", flexDirection :"row", flex : 1, justifyContent :  "center"}}>
  <div style={{ width : "500px"}}>
    <h2> Blinking Cursor </h2>
    <ShowcaseContainer>
      <BlinkingCursorTextBuilder>
        Default
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>
    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        blinkTimeAfterFinish={1000}>
        Static cursor
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>


    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        blinkTimeAfterFinish={-1}
      >
        Infinite Blink
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        timeout={1000}
      >
        Slow building
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        timeout={50}
      >
        Fast building
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        blinkTimeAfterFinish={1000}
        blinkingSpeed={1000}
      >
        Slow blinking
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        blinkTimeAfterFinish={1000}
        blinkingSpeed={200}
      >
        Fast blinking
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        cursorColor={"#4454e2"}
        blinkTimeAfterFinish={1000}
      >
        Colorful
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        cursorStyle={{backgroundColor: "#4454e2", height: "25px"}}
        textStyle={{fontWeight: "bold", font: "Times New Roman", fontSize: "25px"}}
        blinkTimeAfterFinish={-1}>
        Custom Text Style
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        cursorComponent={<div>@</div>}
        blinkTimeAfterFinish={-1}>
        Custom Component
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        style={{transform: "rotate(-10deg)", marginTop: "10px"}}
        cursorComponent={<div>!</div>}
        blinkTimeAfterFinish={-1}>
        Style via style prop
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <BlinkingCursorTextBuilder
        textStyle={{fontWeight: "bold", font: "Times New Roman", fontSize: "18px"}}
        style={{transform: "rotate(-10deg)", marginTop: "10px", marginBottom: "10px"}}
        cursorComponent={<div style={{color: "green"}}> Easy to use!</div>}
        blinkTimeAfterFinish={-1}>
      </BlinkingCursorTextBuilder>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <div style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "center"}}>
        <div style={{maxWidth: "175px"}}>
          <BlinkingCursorTextBuilder
            blinkTimeAfterFinish={-1}>
            Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext... wrapping
          </BlinkingCursorTextBuilder>
        </div>
      </div>
    </ShowcaseContainer>


  </div>
  </div>
}
