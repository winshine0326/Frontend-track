import React from "react";
import { useState } from "react";
import "./InputText.css";

const InputText = ()=>{
    const [text,setText] = useState("");
    return(
        <div className="container">
            <form action="" className="wrapp">
                <input type="text" onChange={(e)=>setText(e.target.value)} className="wrapper"/>
                <button onClick={()=>setText("")} className="btn">초기화</button>
            </form>
            {text===""?"":<div id="modal">
                <span className="">{text}</span>
            </div>}
        </div>
    )
}

export default InputText;