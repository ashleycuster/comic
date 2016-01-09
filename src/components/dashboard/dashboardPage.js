"use strict";

var React = require('react'); 
var Router = require('react-router'); 
var Panel = require('./panel');
var SunburstChart = require('./sunburstChart'); 
var DashboardStore = require('../../stores/dashboardStore');
var DashboardApi = require('../../api/dashboardApi');

var width = 550;
var height = 400; 
var radius = Math.min(width, height) / 2;

var thumbWidth = 350;
var thumbHeight = 200;
var thumbRadius = Math.min(thumbWidth, thumbHeight) / 2;

var panelStats = {
	borderColor: "#aeb0b5",
	headerHeight: 30
};

var chartStats = {
	"height": {
		"thumb": thumbHeight,
		"full": height
	},
	"width": {
		"thumb": thumbWidth,
		"full": width
	},
	"radius": {
		"thumb": thumbRadius,
		"full": radius
	},
	"panelWidth": {
		"thumb": thumbWidth,
		"full": width * 2
	},
	"panelHeight": {
		"thumb": thumbHeight + 2 * panelStats.headerHeight + 5,
		"full": height + 2 * panelStats.headerHeight + 5
	}
};

var sunburstCDM = {
	id: 'sunburstCDM',
	title: 'Risk Evaluation of CDM Agencies'
};
var bar1 = {
	id: "bar1",
	title: "sample bar chart"
};
var scatter1 = {
	id: "scatter1",
	title: "sample scatter plot"
};
var table1 = {
	id: "table1",
	title: "sample table"
};




var Dashboard = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getDefaultProps: function() {
        return {
          chartStats: chartStats,
          panelStats: panelStats,
          sunburstCDM: sunburstCDM,
          bar1: bar1,
          scatter1: scatter1,
          table1: table1
        };
    },

	getInitialState: function () {
		var panelSize = DashboardStore.getIsThumbnail();
		return {
			panelSize: panelSize,
			arcData: {}
		};
	},

	componentWillMount: function () {
		DashboardStore.addChangeListener(this._onChange);
		this.setArcData(this.state.panelSize);
	},

	componentWillUnmount: function () {
		DashboardStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var panelSize = DashboardStore.getIsThumbnail();
		if (DashboardStore.didSunburstChange()) {
			this.setArcData(panelSize);
		}
		this.setState({panelSize: panelSize});
	},

	setArcData: function (panelSize) {
		var radiusStr = "radius";
		var sunburstSize = panelSize[this.props.sunburstCDM.id];
		var arcRadius = this.props.chartStats[radiusStr][sunburstSize];

		var vm = this;

		DashboardApi.getData(arcRadius, function (newArcData) {
			var setArcData = {json: {}, array: []};
			setArcData.json = newArcData.json; 
			setArcData.array = newArcData.array;
			vm.setState({arcData: setArcData});
		});
	},

	getDimension: function (panelId, dimension) {
		var size = this.state.panelSize[panelId];
		var value = chartStats[dimension][size];
		return value;
	},

    render: function () {
		return (
			<div>
				<Panel width={this.getDimension(this.props.sunburstCDM.id, "panelWidth")}
					height={this.getDimension(this.props.sunburstCDM.id, "panelHeight")}
					borderColor={this.props.panelStats.borderColor}
					title={this.props.sunburstCDM.title}
					headerHeight={this.props.panelStats.headerHeight}
					panelId={this.props.sunburstCDM.id}>
					<SunburstChart width={this.getDimension(this.props.sunburstCDM.id, "width")}
						height={this.getDimension(this.props.sunburstCDM.id, "height")}
						radius={this.getDimension(this.props.sunburstCDM.id, "radius")}
						arcData={this.state.arcData}
						hideInfo={this.state.panelSize[this.props.sunburstCDM.id] === "thumb" ? true : false} />
				</Panel>
				<Panel width={this.getDimension(this.props.bar1.id, "panelWidth")}
					height={this.getDimension(this.props.bar1.id, "panelHeight")}
					borderColor={this.props.panelStats.borderColor}
					title={this.props.bar1.title}
					headerHeight={this.props.panelStats.headerHeight}
					panelId={this.props.bar1.id}>
				</Panel>
				<Panel width={this.getDimension(this.props.scatter1.id, "panelWidth")}
					height={this.getDimension(this.props.scatter1.id, "panelHeight")}
					borderColor={this.props.panelStats.borderColor}
					title={this.props.scatter1.title}
					headerHeight={this.props.panelStats.headerHeight}
					panelId={this.props.scatter1.id}>
				</Panel>
				<Panel width={this.getDimension(this.props.table1.id, "panelWidth")}
					height={this.getDimension(this.props.table1.id, "panelHeight")}
					borderColor={this.props.panelStats.borderColor}
					title={this.props.table1.title}
					headerHeight={this.props.panelStats.headerHeight}
					panelId={this.props.table1.id}>
				</Panel>         
			</div>
			);
	}
});

module.exports = Dashboard;