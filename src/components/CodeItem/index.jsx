import React from "react";
import './index.css' 

function CodeItem({ code }) {
	return(
		<li className="each-code">
			<span>{code}</span>
		</li>
	)
	}

export default CodeItem;