import React from "react";

const DisplayPosts = (props) => {
    return (
        <table>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                    <div>
                        <p>{entry.name}</p>
                        <p>{entry.post}</p>
                    </div>
                );
            })}
            </tbody>
        </table>
    );

}
 
export default DisplayPosts;