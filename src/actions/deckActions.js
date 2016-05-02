"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var DeckActions = {

	openDeck: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.OPEN
		});
	},

	dealFiveCards: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.DEAL
		});
	},

	shuffleDeck: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.SHUFFLE
		});
	},

	swapCard: function (card) {
		Dispatcher.dispatch({
			actionType: ActionTypes.SWAP,
			card: card
		});
	}, 


	flipCard: function (card) {
		Dispatcher.dispatch({
			actionType: ActionTypes.FLIP,
			card: card
		});
	}
}; 

module.exports = DeckActions; 