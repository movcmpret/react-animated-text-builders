import React from 'react'

import BlinkingTextBuilderExamples from "./BlinkingTextBuilderExamples";
import FloatingLettersTextBuilderExample from "./FloatingLettersTextBuilderExample";

const App = () => {

  return <div style={{display :"flex", flexDirection :"row"}}>
    <BlinkingTextBuilderExamples/>
    <FloatingLettersTextBuilderExample/>
    </div>
}

export default App
