/*eslint-disable strict */

var React = require('react'); 

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function () {
		return (
			<div> 
				<div className="container-fluid" id="content">
					<RouteHandler/>
				</div>
			</div>
		); 
	}	
});

module.exports = App; 
