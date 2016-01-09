"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); 
var _ = require('lodash');
var CHANGE_EVENT = 'change'; 

var _didSunburstChange = false;
var _panelSize = {
	"sunburstCDM": "thumb",
	"bar1": "thumb",
	"scatter1": "thumb",
	"table1": "thumb"
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
		return _panelSize;
	},

	didSunburstChange: function () {
		return _didSunburstChange;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) { 
		case ActionTypes.TOGGLE_PANEL:
			var id = action.panelId;
			_panelSize[id] = _panelSize[id] === "thumb" ? "full" : "thumb";
			_didSunburstChange = id === "sunburstCDM";
			DashboardStore.emitChange();
			break;
		default: 
			// no op
	}
});

module.exports = DashboardStore; 