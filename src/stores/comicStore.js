"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var uuid = require('node-uuid');
var CHANGE_EVENT = 'change'; 

var _initialId = uuid.v4();
var _bubbles = [{ id: _initialId, character: 1, text: null }];

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
		_bubbles.push({ id: id, character: 1, text: null });
	}, 

	removeBubble: function (bubble) {
		_bubbles.remove(bubble);
	},

	modifyBubble: function (bubble) {
		return;
	},

	getBubbles: function () {
		return _bubbles;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.ADD_BUBBLE:
			ComicStore.addBubble(action.bubble);
			ComicStore.emitChange();
			break;
		case ActionTypes.REMOVE_BUBBLE:
			ComicStore.removeBubble(action.bubble);
			ComicStore.emitChange();
			break; 
		default: 
			// no op
	}
});

module.exports = ComicStore; 