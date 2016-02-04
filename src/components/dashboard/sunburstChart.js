"use strict";

var React = require('react'); 
var SunburstStore = require('../../stores/sunburstStore');
var Path = require('./path');
var Info = require('./info');
var d3 = require('d3');
var DashboardApi = require('../../api/dashboardApi');


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
                 <defs>
                    <pattern id="Triangle" 
                             width="10" height="10"
                             patternUnits="userSpaceOnUse"
                             style={{fill: "#b0b0b0"}}>
                        <polygon points="5,0 10,10 0,10"/>
                    </pattern>
                </defs>
                <defs>
                  <pattern id="circle"
                            x="10" y="10" width="20" height="20"
                            patternUnits="userSpaceOnUse"
                             style={{fill: "#b0b0b0"}}>
                          <circle cx="10" cy="10" r="10" style={{fill: "#b0b0b0"}} />
                  </pattern>
                </defs>
                <defs>
                  <pattern id="dotsUsersDiscovered"
                            x="10" y="10" width="5" height="5"
                            patternUnits="userSpaceOnUse"
                             style={{fill: "#3b3b3b"}}>
                          <rect width="4" height="5" style={{fill: "#3b3b3b"}} />
                          <rect width="5" height="4" style={{fill: "#3b3b3b"}} />
                  </pattern>
                </defs>
                <defs>
                  <pattern id="dotsDevicesDiscovered"
                            x="10" y="10" width="5" height="5"
                            patternUnits="userSpaceOnUse"
                             style={{fill: "#b0b0b0"}}>
                          <rect width="4" height="5" style={{fill: "#b0b0b0"}} />
                          <rect width="5" height="4" style={{fill: "#b0b0b0"}} />
                  </pattern>
                </defs>
                <defs>
                  <pattern id="stripesHorizontalUserProvided"
                            x="10" y="10" width="5" height="5"
                            patternUnits="userSpaceOnUse"
                             style={{fill: "#3b3b3b"}}>
                          <rect width="5" height="4" style={{fill: "#3b3b3b"}} />
                  </pattern>
                </defs>
                <defs>
                  <pattern id="stripesHorizontalDevicesProvided"
                            x="10" y="10" width="5" height="5"
                            patternUnits="userSpaceOnUse"
                             style={{fill: "#b0b0b0"}}>
                          <rect width="5" height="4" style={{fill: "#b0b0b0"}} />
                  </pattern>
                </defs>
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