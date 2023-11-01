import React from "react";
import './index.css'
import CodeItem from "../CodeItem";

function CodeSegment({codes, setCodes}){

    return(
        <>
        {console.log(codes)}
        <div className="box">
        
			<ul className="code-list">
				{codes.map((code, i) => <CodeItem code={code} key={i} />)}
			</ul>
		</div>
       
        </>

    )
}

export default CodeSegment;
