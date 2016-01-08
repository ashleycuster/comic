"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 


var _isThumbnail = {
	"sunburstCDM": true,
	"bar1": true,
	"scatter1": true,
	"table1": true
};

var DashboardStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback); 
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT); 
	}, 

	getIsThumbnail: function () {
		return _isThumbnail;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.TOGGLE_PANEL:
			var id = action.panelId;
			_isThumbnail[id] = !_isThumbnail[id];
			DashboardStore.emitChange();
			break;
		default: 
			// no op
	}
});

module.exports = DashboardStore; 