import React, { useState } from 'react';
import "./CreatePost.css"

const CreatePost = (props) => {

    const [name, setName] = useState(" ");
    const [post, setPost] = useState(" ");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = { 
            name: name,
            post: post
        };
        props.addNewPostProp(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className="post-container">
            <div className="form-group">
                <span><label>Name</label></span>
                <input type="text" value={name} className="name-box" style={{'margin-left': "2em"}} onChange={(event) => setName(event.target.value)}/>
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
                <span><label>Post</label></span>
                <textarea rows="20" cols="20" wrap="hard" value={post} className="post-box" style={{'margin-left': "2.7em"}} onChange={(event) => setPost(event.target.value)}>
                </textarea>
            </div>
            <button tpye="submit" className="create-button" style={{'margin-top': "1em"}}>Create</button>
        </form>
     );
}
 
export default CreatePost;