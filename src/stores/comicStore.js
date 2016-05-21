"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var uuid = require('node-uuid');
var CHANGE_EVENT = 'change'; 

var _initialId = uuid.v4();
var _bubbles = [{ id: _initialId, name: null, text: null }];
var _characterNames = [];
var _characters = [];

var ComicStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback); 
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT); 
	}, 

	addBubble: function () {
		var id = uuid.v4();
		_bubbles.push({ id: id, character: null, text: null });
	}, 

	removeBubble: function (bubbleId) {
		_.remove(_bubbles, function (obj) {
			return obj.id === bubbleId;
		});
	},

	modifyBubble: function (bubbleId, bubbleName, bubbleText) {
		var bubbleIndex = _.findIndex(_bubbles, { id: bubbleId });
		_bubbles[bubbleIndex].text = bubbleText;
		_bubbles[bubbleIndex].name = bubbleName;
		return;
	},

	getBubbles: function () {
		return _bubbles;
	}, 

	setCharacterNames: function () {
		_.forEach(_bubbles, function (bubble) {
			if ( _.indexOf(_characters, bubble.name ) < 0 ) {
				_characterNames.push(bubble.name);
			}
		});
		return;
	},

	addCharacter: function (charObj) {
		_characters.push(charObj);
	},

	getCharacters: function () {
		return _characters;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.ADD_BUBBLE:
			ComicStore.addBubble(action.bubble);
			ComicStore.emitChange();
			break;
		case ActionTypes.REMOVE_BUBBLE:
			ComicStore.removeBubble(action.bubble.id);
			ComicStore.emitChange();
			break; 
		case ActionTypes.MODIFY_BUBBLE:
			ComicStore.modifyBubble(action.bubble.id, action.bubble.name, action.bubble.text);
			ComicStore.emitChange();
			break; 
		case ActionTypes.ADD_CHARACTER:
			ComicStore.addCharacter(action.characterObject);
			ComicStore.emitChange();
			break;
		default: 
			// no op
	}
});

module.exports = ComicStore; 