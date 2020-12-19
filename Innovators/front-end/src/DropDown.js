import React from 'react'
import "./DropDown.css";

function DropDown(props) {
    const items = props.content.title.map((ele,idx)=> <h1 key={idx}>{ele}</h1>);
    return (
        <div className="DropDown">
        <button  className="DropDown-btn">{props.title}</button>
        <div className="DropDown-content">
           {items}
        </div>
            
        </div>
    )
}

export default DropDown
