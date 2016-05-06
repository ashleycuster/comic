/*eslint-disable strict */

var React = require('react');
var Navigation = require('./agencyBootstrap/navigation');

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function () {
		return (
			<div> 
				<Navigation />
				<div>
					<RouteHandler/>
				</div>
			</div>
		); 
	}	
});

module.exports = App; 

// <div className="container-fluid" id="content">
// 					<RouteHandler/>
// 				</div>