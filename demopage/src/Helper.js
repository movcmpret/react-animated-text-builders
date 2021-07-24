import React, {useState} from "react";
import {IconButton} from "@material-ui/core";
import Code from "@material-ui/icons/Code";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsxToString from "jsx-to-string";

export function ShowcaseContainer(props) {

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
