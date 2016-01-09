"use strict"; 

var React = require('react'); 

var About = React.createClass({
	statics: {
		// willTransitionTo: function(transition, params, query, callback) {
		// 	if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
		// 		transition.about(); 
		// 	}
		// 	else { 
		// 		callback(); 
		// 	}
		// }, 
		// willTransitionFrom: function(transition, component) {
		// 	if (!confirm('Are you sure you want to leave a page this exciting?')) {
		// 		transition.about(); 
		// 	}
		// }
	},
	render: function () {
		return (
				<div> 
					<h1>About</h1>
					<p>This application...</p>
						<ul>
							<li>React</li>
							<li>React Router</li>
						</ul>
				</div> 
			);
	}
});

module.exports = About; 