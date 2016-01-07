"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Link = Router.Link; 

var Header = React.createClass({
	render: function () {
		return (
				<nav className="nav dashHeader"> 
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li><Link to="app">ReactD3</Link></li>
							<li><Link to="app">Home</Link></li>
							<li><Link to="about">About</Link></li> 
							<li><Link to="dashboard">Dashboard</Link></li>
						</ul> 
					</div>
				</nav> 
			);
	}
});

module.exports = Header; 