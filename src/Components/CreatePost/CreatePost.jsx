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
        console.log(newEntry)
    }

    return ( 
        <form onSubmite={handleSubmit} className="form-grid">
            <div className="form-group">
                <span>Name<input type="text" className="form-control" style={{'margin-left': "2em"}}  value={name} onChange={(event) => setName(event.target.value)}/></span>
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
                <span>Post<input type="text" className="form-control" style={{'margin-left': "2.7em"}}  value={post} onChange={(event) => setPost(event.target.value)}/></span>
            </div>
            <button tpye="submit" className="create-button" style={{'margin-top': "1em"}}>Create</button>
        </form>
     );
}
 
export default CreatePost;