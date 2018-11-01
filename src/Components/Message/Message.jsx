import React from "react";
import './Message.css';

const Message = ({ text, index }) => {
    // this generates a random hex code and truncated it to 6 characters.
    let randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    // this gives a random position from the top and bottom to place the div in a random place in the view.
    let top =  Math.floor(Math.random()*(document.body.clientHeight - 20));
    let left = Math.floor(Math.random()*(document.body.clientWidth - 20));
    // this is so that the newest message is placed on top.
    let zeta = index + 10; 
    let size = index + (Math.random() * 100);
  return (
    <div
      className="message"
      style={{
        color:  randomColor ,
        position: "absolute",
        top:  top ,
        left:  left ,
        zIndex: zeta,
        fontSize: size
      }}
    >
      {text}
    </div>
  );
};

export default Message;
