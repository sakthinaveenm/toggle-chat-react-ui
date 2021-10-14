import React from "react";
import Comments from "./Comments";
import Post from "./Post";
import Timestamps from "./Timestamps";
import "./ChatBar.css";
import Message from "./Message";

export default function ChatBar(props) {
  return (
    <div
      className="scrll"
      style={{
        width: "100%",
        height: "633px",
        backgroundColor: "#fefefe",
        overflow: "auto",
        paddingBottom: "45px",
        // overflowY: "hidden",
      }}
    >
      <Timestamps />
      <Post />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      {props.openorcls ? null : <Message />}
    </div>
  );
}
