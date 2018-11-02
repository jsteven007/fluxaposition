import React, { Component } from "react";
import "./App.css";
import Speech from "./Components/VoiceTest/VoiceTest";

// import MessageDisplay from "./Components/MessageDisplay/MessageDisplay";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MessageDisplay /> */}
        <Speech />
      </div>
    );
  }
}

export default App;
