"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var ComicActions = {

	addBubble: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_BUBBLE
		});
	},

	removeBubble: function (bubble) {
		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE_BUBBLE,
			bubble: bubble
		});
	},

	modifyBubble: function (id, text) {
		Dispatcher.dispatch({
			actionType: ActionTypes.MODIFY_BUBBLE,
			bubble: {
				id: id, 
				text: text
			}
		});
	}
}; 

module.exports = ComicActions; 