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
		console.log(this.getPanelWidth("sunburst"));
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
			</div>
			);
	}
});

module.exports = Dashboard;         