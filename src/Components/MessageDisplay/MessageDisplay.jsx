import React from 'react';
import { Component } from 'reflux';
import CounterStore from '../../flux/Stores/CounterStore';
import Actions from '../../flux/Actions/actions';
//import './MessageDisplay.css';
 
class MessageDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.store = CounterStore;
  }
  render(){

    return (
      <div className="">
        {this.state.count}
        <button onClick={ () => Actions.increment()  } >Increase Count</button>
        <button onClick={ () => Actions.addToMessages("Hello") } > Add To Messages </button>
      </div>
    )
  }
}
export default MessageDisplay;