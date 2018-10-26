import Reflux from 'reflux';
import Actions from '../Actions/actions';

export default class CounterStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {count: 0, messages:[]};
		this.listenables = Actions;
	}
	
	onIncrement()
	{
        console.log(this.state.count);
		this.setState({count: this.state.count+1});
	}
	
	onDecrement()
	{
		this.setState({count: this.state.count-1});
	}
	
	onChangeBy(amount)
	{
		this.setState({count: this.state.count+amount});
	}

	onAddToMessages(message){
		const { messages } =  this.state;
		let newArray = messages.concat(message);
		this.setState({ messages: newArray });
		
	}
}