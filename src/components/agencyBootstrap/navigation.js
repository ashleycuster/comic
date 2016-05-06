"use strict"; 

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header page-scroll">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="home" className="navbar-brand page-scroll">Comic Generator</Link>
				</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="bubbles">Conversation</Link>
							</li>
							<li>
								<Link to="bubbles">Characters</Link>
							</li>
							<li>
								<Link to="bubbles">Panels</Link>
							</li>
							<li>
								<Link to="bubbles">Strip</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			);
	}
});

module.exports = Navigation;