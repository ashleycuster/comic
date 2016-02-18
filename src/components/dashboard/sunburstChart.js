"use strict";

var React = require('react'); 
var SunburstStore = require('../../stores/sunburstStore');
var Path = require('./path');
var Info = require('./info');
var d3 = require('d3');
var DashboardApi = require('../../api/dashboardApi');
var Dots = require('../patterns/dots');
var Stripes = require('../patterns/stripes');


var SunburstChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number.isRequired,
    arcData: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      agencyName: "Agency Name",
      riskScore: "",
      highlightedNodes: [],
      fillOpacity: 1
    };
  },

  componentWillMount: function () {
    SunburstStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    SunburstStore.removeChangeListener(this._onChange); 
  },

  _onChange: function () {
    var highlightedNodes = SunburstStore.getHighlightedNodes();
    var fillOpacity = SunburstStore.getFillOpacity();
    var agencyName = SunburstStore.getIsHighlighted() ? highlightedNodes[0].name : "";
    var riskScore = SunburstStore.getIsHighlighted() ? DashboardApi.dhsAgencyRiskScores[agencyName] : "";
    this.setState({
                    agencyName: agencyName.toUpperCase(), 
                    riskScore: riskScore, 
                    highlightedNodes: highlightedNodes,
                    fillOpacity: fillOpacity
                  });
  },

  render: function() {
    if (this.props.arcData.array === undefined) {
      return (<div />);
    }
    return (
        <div>
           <svg width={this.props.width} height={this.props.height} style={{float: "left"}} >
                 <Dots id="dotsUsersDiscovered" color="#3b3b3b" />
                 <Dots id="dotsDevicesDiscovered" color="#b0b0b0" />
                 <Stripes id="stripesHorizontalUserProvided" color="#3b3b3b" />
                 <Stripes id="stripesHorizontalDevicesProvided" color="#b0b0b0" />
                <Path height={this.props.height}
                      width={this.props.width}
                      radius={this.props.radius}
                      arcData={this.props.arcData}
                      highlightedNodes={this.state.highlightedNodes}
                      fillOpacity={this.state.fillOpacity} />
            </svg>
            <Info marginLeft={this.props.width}
                  agencyName={this.state.agencyName}
                  riskScore={this.state.riskScore}
                  highlightedNodes={this.state.highlightedNodes}
                  display={this.props.hideInfo ? "none" : "block"} />
        </div>
    );
  }
});

module.exports = SunburstChart; 