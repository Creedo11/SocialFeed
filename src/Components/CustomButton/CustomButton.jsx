import React, { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive")

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else (
            setButtonClass("inactive")
        )
    }

    return ( 
        <div className="like-button">
            <button className={buttonClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
}

export default CustomButton;







 