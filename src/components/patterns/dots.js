"use strict"; 

var React = require('react');

var Dots = React.createClass({

	propTypes: {
		color: React.PropTypes.string.isRequired, 
		id: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
				<defs>
					<pattern id={this.props.id}
						x="10" y="10" width="5" height="5"
						patternUnits="userSpaceOnUse"
						style={{fill: this.props.color}}>
						<rect width="4" height="5" style={{fill: this.props.color}} />
						<rect width="5" height="4" style={{fill: this.props.color}} />
					</pattern>
				</defs>
			);
	}
});

module.exports = Dots; 