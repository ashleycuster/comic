"use strict";

var React = require('react');

var PanelHeader = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		borderColor: React.PropTypes.string.isRequired,
		height: React.PropTypes.string.isRequired
	},

	getDefaultProps: function () {
		return {
			backgroundColor: "#aeb0b5",
			borderBottomWidth: "thin",
			marginTop: "0px",
			marginLeft: "0px",
			borderRadius: "4px",
			borderStyle: "outset", 
			pMarginLeft: "10px"
		};
	},

	getStyles: function () {
		var styles = { backgroundColor: this.props.backgroundColor, 
						height: this.props.height, 
						lineHeight: this.props.height,
						borderBottomWidth: this.props.borderBottomWidth,
						borderBottomColor: this.props.borderColor,
						borderBottomStyle: this.props.borderStyle,
						marginTop: this.props.marginTop,
						marginLeft: this.props.marginLeft,
						borderTopLeftRadius: this.props.borderRadius,
						borderTopRightRadius: this.props.borderRadius
					};
		return styles; 
	},

	render: function () {
		return (
				<div style={this.getStyles()}>
					<p style={{marginLeft: this.props.pMarginLeft, color: this.props.borderColor}}>{this.props.title}</p>
				</div>
			);
	}
});

module.exports = PanelHeader;