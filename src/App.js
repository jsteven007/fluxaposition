import React, { Component } from 'react';
import './App.css';
import MessageDisplay from './Components/MessageDisplay/MessageDisplay';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      message:'',
      messages:[],
    };
    this.addToMessages = this.addToMessages.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({message: val});
  }

  addToMessages(val){
    const { messages } = this.state;
    let newArray= messages.concat(val);
    this.setState({ messages : newArray } );
    this.setState({ message:"" });
  }

  render() {
    console.log("props",this.props, "state", this.state);
    const { message, messages } = this.state;
    return (
      <div className="App">
       <input value={ message } onChange={ (e) => this.handleChange(e.target.value) }  column="10" rows="1"/>
       <button  onClick={ () => this.addToMessages( message )}> Add Your Message </button>
       { messages.length > 0 && messages.map( (elem, i) => {
         return <div key={i} >{elem}</div>
       }  ) }
       <MessageDisplay/>
      </div>
    );
  }
}

export default App;
