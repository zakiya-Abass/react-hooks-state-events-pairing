import React, { useState } from "react";
import videoData from "./data/video";

function App() {
  const [showComments, setShowComments] = useState(true);
  const [video, setVideo] = useState(videoData);

  function handleUpvote() {
    setVideo((prevVideo) => ({
      ...prevVideo,
      upvotes: prevVideo.upvotes + 1,
    }));
  }

  function handleDownvote() {
    setVideo((prevVideo) => ({
      ...prevVideo,
      downvotes: prevVideo.downvotes + 1,
    }));
  }

  function handleToggleComments() {
    setShowComments((prevShowComments) => !prevShowComments);
  }

  return (
    <div className="App">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={video.embedUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <h1>{video.title}</h1>
        <p>
          {video.views} views | uploaded {video.createdAt}
        </p>
        <button onClick={handleUpvote}>👍 {video.upvotes}</button>
        <button onClick={handleDownvote}>👎 {video.downvotes}</button>
      </div>
      <div className="comments-container">
        <button onClick={handleToggleComments}>
          {showComments ? "Hide" : "Show"} Comments
        </button>
        {showComments && (
          <ul>
            {video.comments.map((comment) => (
              <li key={comment.id}>
                <p>
                  <b>{comment.user}</b>
                  <br />
                  {comment.comment}
                </p>
                <button>👍 {comment.upvotes}</button>
                <button>👎 {comment.downvotes}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
