"use strict"; 

var React = require('react'); 
var Router = require('react-router'); 
var Panel = require('./panel');
var SunburstChart = require('./sunburstChart'); 

var width = 550; 
var height = 400; 
var radius = Math.min(width, height) / 2;
var panelBorderColor = "#aeb0b5";
var cdmTitle = "Risk Evaluation of CDM Agencies";
var barTitle = "Sample bar chart";
var scatterTitle = "Sample scatter plot";
var tableTitle = "Sample table";
var panelHeaderHeight = 30;
var isThumbnail = {
	"sunburst": true,
	"bar": true,
	"scatter": true,
	"table": true
};
var thumbWidth = 350;
var thumbHeight = 200;
var thumbRadius = Math.min(thumbWidth, thumbHeight) / 2;
var sunburst = "sunburst";


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
          thumbHeight: thumbHeight,
          thumbWidth: thumbWidth,
          thumbRadius: thumbRadius,
          panelBorderColor: panelBorderColor,
          cdmTitle: cdmTitle,
          barTitle: barTitle,
          scatterTitle: scatterTitle,
          tableTitle: tableTitle,
          panelHeaderHeight: panelHeaderHeight
        };
    },

	getInitialState: function () {
		return {
			isThumbnail: isThumbnail
		};
	},

	getPanelWidth: function (panelName) {
		return this.state.isThumbnail[panelName] ? this.props.thumbWidth : this.props.width * 2;
	},

	getWidth: function (panelName) {
		return this.state.isThumbnail[panelName] ? this.props.thumbWidth : this.props.width;
	},

	getHeight: function (panelName) {
		return this.state.isThumbnail[panelName] ? this.props.thumbHeight : this.props.height;
	},

	getRadius: function (panelName) {
		return this.state.isThumbnail[panelName] ? this.props.thumbRadius : this.props.radius;
	},

    render: function () {
		return (
			<div>
				<Panel width={this.getPanelWidth("sunburst")}
					height={this.getHeight("sunburst") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.cdmTitle}
					headerHeight={this.props.panelHeaderHeight}>
					<SunburstChart width={this.getWidth("sunburst")}
						height={this.getHeight("sunburst")}
						radius={this.getRadius("sunburst")}
						hideInfo={this.state.isThumbnail.sunburst} />
				</Panel>
				<Panel width={this.getPanelWidth("bar")}
					height={this.getHeight("bar") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.barTitle}
					headerHeight={this.props.panelHeaderHeight}>
					<p>placeholder</p>
				</Panel>
				<Panel width={this.getPanelWidth("scatter")}
					height={this.getHeight("scatter") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.scatterTitle}
					headerHeight={this.props.panelHeaderHeight}>
					<p>placeholder</p>
				</Panel>
				<Panel width={this.getPanelWidth("table")}
					height={this.getHeight("table") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.tableTitle}
					headerHeight={this.props.panelHeaderHeight}>
					<p>placeholder</p>
				</Panel>
			</div>
			);
	}
});

module.exports = Dashboard;         