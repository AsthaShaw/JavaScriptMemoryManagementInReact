import React from "react";
import './index.css'
import CodeSegment from "../CodeSegment";
//import * as Components from ".././components"




function InputSegment({inputText, setInputText, codes, setCodes}){
 
    function pushElement(element) {
        // Create a copy of the array and add the new element
        const newCodes = [...codes, element];
        
        // Update the state with the new array
        setCodes(newCodes);
      };

    function handleSubmit(e){
        e.preventDefault();
        pushElement(inputText)
        setInputText('')
    }

    function handleInput(e){
        setInputText(e.target.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input value={inputText} type="text" className="inputText" onChange={handleInput} />
        <button type="submit" className="button">Submit</button>
        </form>
        <CodeSegment codes={codes} setCodes={setCodes} />
        </>

    )
}

export default InputSegment;