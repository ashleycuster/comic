"use strict";

var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<header>
					<div style={{ width: "100%", height: "100%", backgroundColor: "rgba(243,147,85,0.85)"}}>
					<div className="container">
						<div className="intro-text">
							<div className="intro-lead-in">Turn Your Conversation into a Comic Strip!</div>
							<div className="intro-heading">Comic Generator</div>
							<a href="#services" className="page-scroll btn btn-xl">Get Started</a>
						</div>
					</div>
					</div>
			</header>
			);
	}
});

module.exports = Header;