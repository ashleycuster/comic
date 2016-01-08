"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 

var DashboardActions = {

	togglePanel: function (panelId) {
		Dispatcher.dispatch({
			actionType: ActionTypes.TOGGLE_PANEL,
			panelId: panelId
		});
	}
}; 

module.exports = DashboardActions;