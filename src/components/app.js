/*eslint-disable strict */

var React = require('react');
var ComicPage = require('./comic/comicPage');

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function () {
		return (
			<ComicPage />
		); 
	}	
});

module.exports = App; 

// <div className="container-fluid" id="content">
// 					<RouteHandler/>
// 				</div>