import React from "react";
import "./Option.css";

const Option = (props)=>{
    const options =[
        {text:"Find Doctors", handler:props.actionProvider.handleDoctorList, id:1},
        {text:"Information About Disease",handler:props.actionProvider.handleDisease,id:2},
        {text:"Chat Room",handler:props.actionProvider.handleContact,id:3},
        {text:"Other",handler:()=>{},id:4},
    ];
    const optionMarkup = options.map((option) => (
        <button
          className="option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));
      return <div className="option-container">{optionMarkup}</div>;
}

export default Option;