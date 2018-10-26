var Reflux = require('reflux');

var ImageActions = Reflux.createActions([
    'increment',
	'decrement',
	'changeBy',
	'addToMessages'
]);

module.exports = ImageActions;