import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  return (
    <>
      <NavBar />
      <div className="feed-container">
        <div className="border-box">
          <CreatePost />
        </div>
        <div className="border-box">
          <DisplayPosts />
        </div>
      </div>
    </>
  );
}

export default App;
