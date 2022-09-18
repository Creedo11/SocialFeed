import React, { useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";




function App() {

  const [entries, setEntries] = useState([{name: "Keegan", post: "The post compoenent is really thorwing me off. If I don't hardcode the first entry, the like and dislike buttons are sitting there by themselves until I enter another post."}])

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
