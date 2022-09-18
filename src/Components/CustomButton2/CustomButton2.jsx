import React, { useState } from 'react';
import "./CustomButton2.css"

export const CustomButton2 = (props) => {

    const [buttonClass2, setButtonClass2] = useState("inactive2")

    function handleClick2(){
        if(buttonClass2 === "inactive2"){
            setButtonClass2("active2");
        }
        else (
            setButtonClass2("inactive2")
        )
    }

    return ( 
        <div>
            <button className={buttonClass2} onClick={handleClick2}>{props.message}</button>
        </div>
     );
};

export default CustomButton2
