"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var ComicActions = {

	addBubble: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_BUBBLE
		});
	},

	removeBubble: function (id) {
		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE_BUBBLE,
			bubble: {
				id: id
			}
		});
	},

	modifyBubble: function (id, name, text) {
		Dispatcher.dispatch({
			actionType: ActionTypes.MODIFY_BUBBLE,
			bubble: {
				id: id, 
				name: name,
				text: text
			}
		});
	}
}; 

module.exports = ComicActions; 