import React, { useState } from "react";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      likes: 12,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline_posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamps={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
      timeline
    </div>
  );
}

export default Timeline;
