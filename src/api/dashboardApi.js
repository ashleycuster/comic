/*
 *
 * This code was modified from the example found at http://bl.ocks.org/kerryrodden/7090426
 * which is covered by the Apache v2.0 License. A copy of this license is as follows:
 *    --- BEGIN ---
 *    Copyright 2013 Google Inc. All Rights Reserved.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 *  --- END ---
 * Developers: Do not remove this notification or license.
 */
"use strict";

var d3 = require('d3');

var DashboardApi = {

	// Take a 2-column CSV and transform it into a hierarchical structure suitable
	// for a partition layout. The first column is a sequence of step names, from
	// root to leaf, separated by hyphens. The second column is a count of how 
	// often that sequence occurred.
	buildHierarchy: function (csv) {
		var childrenStr = "children";
		var nameStr = "name";
		var root = {"name": "root", "children": []};
		for (var i = 0; i < csv.length; i++) {
			var sequence = csv[i][0];
			var size = +csv[i][1];
		if (isNaN(size)) { // e.g. if this is a header row
			continue;
		}
		var parts = sequence.split("-");
		var currentNode = root;
		for (var j = 0; j < parts.length; j++) {
			var children = currentNode[childrenStr];
			var nodeName = parts[j];
			var childNode;
			if (j + 1 < parts.length) {
				// Not yet at the end of the sequence; move down the tree.
				var foundChild = false;
				for (var k = 0; k < children.length; k++) {
					if (children[k][nameStr] === nodeName) {
						childNode = children[k];
						foundChild = true;
						break;
					}
				}
				// If we don't already have a child node for this branch, create it.
				if (!foundChild) {
					childNode = {"name": nodeName, "children": []};
					children.push(childNode);
				}
				currentNode = childNode;
			}
			else {
			// Reached the end of the sequence; create a leaf node.
				childNode = {"name": nodeName, "size": size};
				children.push(childNode);
			}
		}
		}
		return root;
	},

	getData: function (radius, successCallback) {
		var vm = this;
	// Use d3.text and d3.csv.parseRows so that we do not need to have a header
	// row, and can receive the csv as an array of arrays.
		d3.text("data/cdm_metrics.csv", function(text) {
			var newArcData = { json: {}, array: [] };
			var csv = d3.csv.parseRows(text);
			var json = vm.buildHierarchy(csv);

			var partition = d3.layout.partition()
				.size([2 * Math.PI, radius * radius])
				.value(function(d) { return d.size; });

			// For efficiency, filter nodes to keep only those large enough to see.
			var nodes = partition.nodes(json)
				.filter(function(d) {
					return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
			});

			newArcData.json = json; 
			newArcData.array = nodes; 

			successCallback(newArcData);
		});
	},

	// calculateColor function written by Ashley Custer
	// Calculate color based on number 0-100
	// 100 = all red, 50 = half red half green (yellow), 0 = all green
	calculateColor: function (name) {
		var score = this.dhsAgencyRiskScores[name];
		score = score % 100;
		var max = 180;
		var red = max; 
		var green = max; 

		var x = score - 50; 
		if ( x > 0 ) {
			green -= max * (x / 50);
		}
		else {
			red += max * (x / 50); 
		}

		var redHex = Math.floor(red).toString(16);
		var greenHex = Math.floor(green).toString(16);
		redHex = redHex.length < 2 ? "0" + redHex : redHex;
		greenHex = greenHex.length < 2 ? "0" + greenHex : greenHex;
		var colorHex = "#" + redHex + greenHex + "00"; 
		return colorHex; 
	},

	calculateColorIntensity: function (name) {
		var score = this.dhsAgencyRiskScores[name];
		score = (score % 100) / 100;
		var greenMax = 102; 
		var redMax = 65;

		var greenHex = Math.floor(greenMax * score).toString(16);
		var redHex = Math.floor(redMax * score).toString(16);
		redHex = redHex.length < 2 ? "0" + redHex : redHex;
		greenHex = greenHex.length < 2 ? "0" + greenHex : greenHex;
		var colorHex = "#" + redHex + greenHex + "00";
		return colorHex;
	},

	getCdmColor: function (node) {
		var name = node.name;
		var parentName = node.parent.name;
		var color = "";
		if (name === "users") {
			color = "#3b3b3b";
		}
		else if (name === "devices") {
			color = "#b0b0b0";
		}
		else if (parentName === "users") {
			if (name === "provided") {
				color = "url(#stripesHorizontalUserProvided)";
			}
			else {
				color = "url(#dotsUsersDiscovered)";
			}
		}
		else if (parentName === "devices") {
			if (name === "provided") {
				color = "url(#stripesHorizontalDevicesProvided)";
			}
			else {
				color = "url(#dotsDevicesDiscovered)";
			}
		}
		else {
			color = "#898989";
		}
		return color;
	},

	dhsAgencyRiskScores: {
		"customs": 90,
		"customscomponent1": 98,
		"subcomponent1": 80,
		"subcomponent2": 0,
		"customscomponent2": 95,
		"customscomponent3": 85,
		"customscomponent4": 40,
		"citizenship": 77,
		"citizenshipcomponent1": 63,
		"citizenshipcomponent2": 90,
		"citizenshipcomponent3": 45,
		"citizenshipcomponent4": 17,
		"coastguard": 83,
		"coastguardcomponent1": 70,
		"coastguardcomponent2": 60,
		"coastguardcomponent3": 81,
		"coastguardcomponent4": 0,
		"fema": 58,
		"femacomponent1": 40,
		"femacomponent2": 60,
		"femacomponent3": 65,
		"femacomponent4": 15,
		"immigration": 25,
		"immigrationcomponent1": 30,
		"immigrationcomponent2": 60,
		"immigrationcomponent3": 10,
		"immigrationcomponent4": 22,
		"secretservice": 35,
		"secretservicecomponent1": 20,
		"secretservicecomponent2": 50,
		"secretservicecomponent3": 15,
		"secretservicecomponent4": 30,
		"tsa": 95,
		"tsacomponent1": 99,
		"tsacomponent2": 25,
		"tsacomponent3": 83,
		"tsacomponent4": 54
		}
};

module.exports = DashboardApi;