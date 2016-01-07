"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Panel = require('./panel');
var SunburstChart = require('./sunburstChart'); 

var width = 550; 
var height = 400; 
var radius = Math.min(width, height) / 2;
var panelBorderColor = "#5b616b";
var cdmTitle = "Risk Evaluation of CDM Agencies";
var panelHeaderHeight = 30;


var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getDefaultProps: function() {
        return {
          width: width,
          height: height,
          radius: radius,
          panelBorderColor: panelBorderColor,
          cdmTitle: cdmTitle,
          panelHeaderHeight: panelHeaderHeight
        };
    },

    render: function () {
		return (
			<div>
				<Panel width={this.props.width}
					height={this.props.height + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.cdmTitle}
					headerHeight={this.props.panelHeaderHeight}>
					<SunburstChart width={this.props.width}
						height={this.props.height}
						radius={this.props.radius} />
				</Panel>
			</div>
			);
	}
});

module.exports = Dashboard;         