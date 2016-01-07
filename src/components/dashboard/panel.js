"use strict";

var React = require('react');
var PanelHeader = require('./panelHeader');

var Panel = React.createClass({
	propTypes: {
		height: React.PropTypes.number.isRequired,
		width: React.PropTypes.number.isRequired,
		borderColor: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		headerHeight: React.PropTypes.number.isRequired
		// position: React.PropTypes.string.isRequired
	},

	setPosition: function (position) {
		return;
	},

	render: function () {
		console.log(this.props.width);
		return (
				<div className="panel" style={{ display: "block", backgroundColor: "white", height: this.props.height, width: this.props.width, borderColor: this.props.borderColor }}>
					<PanelHeader borderColor={this.props.borderColor} title={this.props.title} height={this.props.headerHeight.toString() + "px"} />
					{this.props.children}
				</div>
			);
	}
});

module.exports = Panel; 