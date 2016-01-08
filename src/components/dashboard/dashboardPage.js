"use strict";

var React = require('react'); 
var Router = require('react-router'); 
var Panel = require('./panel');
var SunburstChart = require('./sunburstChart'); 
var DashboardStore = require('../../stores/dashboardStore');

var width = 550;
var height = 400; 
var radius = Math.min(width, height) / 2;
var panelBorderColor = "#aeb0b5";
var cdmTitle = "Risk Evaluation of CDM Agencies";
var barTitle = "Sample bar chart";
var scatterTitle = "Sample scatter plot";
var tableTitle = "Sample table";
var panelHeaderHeight = 30;
var thumbWidth = 350;
var thumbHeight = 200;
var thumbRadius = Math.min(thumbWidth, thumbHeight) / 2;
var sunburstId = "sunburstCDM";
var barId = "bar1";
var scatterId = "scatter1";
var tableId = "table1";



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
		var isThumbnail = DashboardStore.getIsThumbnail();
		return {
			isThumbnail: isThumbnail
		};
	},

	componentWillMount: function () {
		DashboardStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		DashboardStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var isThumbnail = DashboardStore.getIsThumbnail();
		this.setState({isThumbnail: isThumbnail});
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
				<Panel width={this.getPanelWidth("sunburstCDM")}
					height={this.getHeight("sunburstCDM") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.cdmTitle}
					headerHeight={this.props.panelHeaderHeight}
					panelId="sunburstCDM">
					<SunburstChart width={this.getWidth("sunburstCDM")}
						height={this.getHeight("sunburstCDM")}
						radius={this.getRadius("sunburstCDM")}
						hideInfo={this.state.isThumbnail["sunburstCDM"]} />
				</Panel>
				<Panel width={this.getPanelWidth("bar1")}
					height={this.getHeight("bar1") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.barTitle}
					headerHeight={this.props.panelHeaderHeight}
					panelId="bar1">
					<p>placeholder</p>
				</Panel>
				<Panel width={this.getPanelWidth("scatter1")}
					height={this.getHeight("scatter1") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.scatterTitle}
					headerHeight={this.props.panelHeaderHeight}
					panelId="scatter1">
					<p>placeholder</p>
				</Panel>
				<Panel width={this.getPanelWidth("table1")}
					height={this.getHeight("table1") + this.props.panelHeaderHeight * 2 + 5}
					borderColor={this.props.panelBorderColor}
					title={this.props.tableTitle}
					headerHeight={this.props.panelHeaderHeight}
					panelId="table1">
					<p>placeholder</p>
				</Panel>
			</div>
			);
	}
});

module.exports = Dashboard;         