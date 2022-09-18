import React from "react";
import CustomButton from "../CustomButton/CustomButton" 
import CustomButton2 from "../CustomButton2/CustomButton2"
import "./DisplayPosts.css"



const DisplayPosts = (props) => {

    return (
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div className="feed-content">
                        <h3>{entry.name}</h3>
                        <p>{entry.post}</p>
                        <span className="approval-buttons"><CustomButton message="Like" /><CustomButton2 message="Dislike" /></span>
                        <hr className="post-divider"></hr>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayPosts;

