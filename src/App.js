import React, { useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";




function App() {

  const [entries, setEntries] = useState([{name: " ", post: " "}])

  function addNewPost(entry){
    
    let tempPosts = [entry, ...entries];

    setEntries(tempPosts);

  }
  
  return (
    <div>
      <NavBar />
      <div className="feed-container">
        <div className="border-box">
          <CreatePost addNewPostProp={addNewPost}/>
        </div>
        <div className="border-box">
          <DisplayPosts parentEntries={entries}/>
        </div>
      </div>
    </div>
  );
}


export default App;
