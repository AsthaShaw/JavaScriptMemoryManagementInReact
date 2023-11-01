import React, {useState} from 'react';
import './index.css'
import * as Components from '../../components';



export default function HomePage(){
    const [inputText, setInputText]=useState('');
    const [codes,setCodes]=useState([])
    return (
        <>
        <div className="container">
      
       <Components.InputSegment inputText={inputText} setInputText={setInputText} codes={codes} setCodes={setCodes}  />
       <div className='component-container'>
       <Components.Stack />
       <Components.Heap />
       </div>
       </div>
        </>
    )
}