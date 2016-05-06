"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function () {
		return (
			<header style={{ width: "100%" }}>
					<div style={{ width: "100%", height: "100%", backgroundColor: "rgba(243,147,85,0.85)"}}>
					<div className="container">
						<div className="intro-text">
							<div className="intro-lead-in">Turn Your Conversation into a Comic Strip!</div>
							<div className="intro-heading">Comic Generator</div>
							<Link to="bubbles" className="page-scroll btn btn-xl">Get Started</Link>
						</div>
					</div>
					</div>
			</header>
			);
	}
});

module.exports = Header;