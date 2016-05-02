"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 

var _cardsInDeck = [];
var _cardsOnTable = [];
var _suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']; 
var _numInSuit = 13;
var _isOpen = false;
var _isFaceUpDefault = false;

var _returnAllCardsToDeck = function () {
	for (var i = 0, count = _cardsOnTable.length; i < count; i++) {
		var cardReturningToDeck = _cardsOnTable.pop();
		cardReturningToDeck.isFaceUp = _isFaceUpDefault;
		_cardsInDeck.push(cardReturningToDeck);
	}
};


var DeckStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback); 
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT); 
	}, 

	getCardsInDeck: function () {
		return _cardsInDeck;
	}, 

	getCardsOnTable: function () {
		return _cardsOnTable;
	},

	getIsOpen: function () {
		return _isOpen; 
	},

	createDeck: function () {
		if (_cardsInDeck.length < 1) {
			for (var i = 0, count = _suits.length; i < count; i++) {
				for (var j = 1; j < _numInSuit + 1; j++) {
					_cardsInDeck.push({ suit: _suits[i], value: j, isFaceUp: _isFaceUpDefault });
				}
			}
			_isOpen = true;
		}
		else {
			_cardsInDeck = [];
			_cardsOnTable = [];
			_isOpen = false;
		}
		return; 
	}, 

	dealFiveCards: function () {
		_returnAllCardsToDeck();
		// take top five cards from cardsInDeck and push to cardsOnTable
		for (var i = 0, count = 5; i < count; i++) {
			_cardsOnTable.push(_cardsInDeck.shift());
		}
		return;
	}, 

	shuffleDeck: function () {
		_returnAllCardsToDeck();
		_cardsInDeck = _.shuffle(_cardsInDeck); 
	}, 

	swapCard: function (card) {
		var cardIndex = _.findIndex(_cardsOnTable, { suit: card.suit, value: card.value });
		var cardReturningToDeck = _cardsOnTable[cardIndex];
		var faceUpStatus = cardReturningToDeck.isFaceUp;
		cardReturningToDeck.isFaceUp = _isFaceUpDefault;
		_cardsOnTable[cardIndex] = _cardsInDeck.shift();
		_cardsOnTable[cardIndex].isFaceUp = faceUpStatus;
		_cardsInDeck.push(cardReturningToDeck);	
		return; 
	}, 

	flipCard: function (card) { 
		var cardIndex = _.findIndex(_cardsOnTable, { suit: card.suit, value: card.value });
		_cardsOnTable[cardIndex].isFaceUp = !_cardsOnTable[cardIndex].isFaceUp;
		return;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.OPEN:
			DeckStore.createDeck();
			DeckStore.emitChange();
			break; 
		case ActionTypes.DEAL:
			DeckStore.dealFiveCards();
			DeckStore.emitChange();
			break;
		case ActionTypes.SHUFFLE: 
			DeckStore.shuffleDeck();
			DeckStore.emitChange();
			break;
		case ActionTypes.SWAP:
			DeckStore.swapCard(action.card);
			DeckStore.emitChange();
			break; 
		case ActionTypes.FLIP:
			DeckStore.flipCard(action.card);
			DeckStore.emitChange();
			break;
		default: 
			// no op
	}
});

module.exports = DeckStore; 