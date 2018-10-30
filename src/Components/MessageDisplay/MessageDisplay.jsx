import React from "react";
import { Component } from "reflux";
import CounterStore from "../../flux/Stores/CounterStore";
import Actions from "../../flux/Actions/actions";
//import './MessageDisplay.css';

class MessageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.store = CounterStore;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ message: val });
  }

  displayMessages() {
    const { messages } = this.state;
    return (
      messages.length > 0 &&
      messages.map((elem, i) => {
        return <div key={i}>{elem}</div>;
      })
    );
  }

  render() {
    const { message, messages } = this.state;
    console.log(messages);
    return (
      <div className="">
        <input
          value={message}
          onChange={e => this.handleChange(e.target.value)}
          column="10"
          rows="1"
        />
        <button
          onClick={() => {
            Actions.addToMessages(message);
            this.setState({ message: "" });
          }}
        >
          Add To Messages
        </button>
        {this.displayMessages()}
      </div>
    );
  }
}
export default MessageDisplay;
