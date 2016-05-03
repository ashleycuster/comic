/*eslint-disable strict */

var React = require('react');
var Navigation = require('./agencyBootstrap/navigation');
var Header = require('./agencyBootstrap/header');
var Section = require('./agencyBootstrap/section');

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function () {
		return (
			<div>
			   <Navigation />
			    <Header />
			    <Section title="Speech Bubbles" subheading="Fill in speech bubbles with your text">
			    </Section>
			</div>
		); 
	}	
});

module.exports = App; 

// <div className="container-fluid" id="content">
// 					<RouteHandler/>
// 				</div>