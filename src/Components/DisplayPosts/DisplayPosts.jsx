import React from "react";
import CustomButton from "../CustomButton/CustomButton" 
import CustomButton2 from "../CustomButton2/CustomButton2"



const DisplayPosts = (props) => {

    return (
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div>
                        <p>{entry.name}</p>
                        <p>{entry.post}</p>
                        <div className="approval-buttons">
                            <span><CustomButton message="Like" /><CustomButton2 message="Dislike" /></span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayPosts;

