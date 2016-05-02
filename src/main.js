"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var ReactDOM = require('react-dom');
var routes = require('./routes'); 

Router.run(routes, function(Handler) {
	ReactDOM.render(<Handler/>, document.getElementById('app')); 
});


