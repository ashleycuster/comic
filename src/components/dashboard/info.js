"use strict";

var React = require('react'); 
var SunburstStore = require('../../stores/sunburstStore');

var Info = React.createClass({
	propTypes: {
		marginLeft: React.PropTypes.number.isRequired,
		highlightedNodes: React.PropTypes.array.isRequired
	},

	render: function () {
		return (
				<div width="1000px" style={{ marginLeft: this.props.marginLeft, display: this.props.display }}>
					<h1 className="heading">{this.props.agencyName}, Risk Score: {this.props.riskScore}</h1>
					<table style={{ marginTop: "20px", marginLeft: "20px"}}>
						<tbody>
							<tr>
								<td style={{width: "500px"}}>Number of endpoints identified</td>
								<td style={{width: "1000px"}}>###</td>
							</tr>
							<tr>
								<td>Number of endpoints secured</td>
								<td>###</td>
							</tr>
							<tr height="20px">
								<td colSpan="2"></td>
							</tr>
							<tr>
								<td>Number of users</td>
								<td>###</td>
							</tr>
							<tr height="20px">
								<td colSpan="2"></td>
							</tr>
							<tr>
								<td>Licenses required</td>
								<td>###</td>
							</tr>
							<tr>
								<td>Licenses procured</td>
								<td>###</td>
							</tr>
							<tr>
								<td>Licenses installed</td>
								<td>###</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
	}
});

module.exports = Info; 