import React, { Component } from "react";
import "./App.css";
import MessageDisplay from "./Components/MessageDisplay/MessageDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageDisplay />
      </div>
    );
  }
}

export default App;
