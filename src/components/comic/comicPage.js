"use strict";

var React = require('react');
var Router = require('react-router'); 
var Bubble = require('./bubble');
var ComicStore = require('../../stores/ComicStore');
var ComicActions = require('../../actions/comicActions');
var uuid = require('node-uuid');



var ComicPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getInitialState: function () {
		return {
			bubbles: ComicStore.getBubbles()
		};
	},

	componentWillMount: function () {
		ComicStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		ComicStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var bubbles = ComicStore.getBubbles();
		console.log(bubbles);
		this.setState({ bubbles: bubbles });
	},

	addBubble: function () {
		ComicActions.addBubble();
	},

	createBubble: function (bubbleObj) {
		var properties = {
					id: bubbleObj.id,
					character: bubbleObj.character,
					text: bubbleObj.text
				};
		return (
				<Bubble 
					key={uuid.v4()}
					character={bubbleObj.character}
					id={bubbleObj.id}
					text={bubbleObj.text}></Bubble>
			);
	},

    render: function () {
		return (
			<div>
				<h1 style={{ textAlign: "center", color: "#c56395" }}>COMIC GENERATOR</h1>
				<div className="bubbleContainer" style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 100 }}>
					{this.state.bubbles.map(this.createBubble, this)}
					<p onClick={this.addBubble} style={{ textAlign: 'center', cursor: 'pointer'}}>+ Add Speech Bubble</p>
				</div>
			</div>
			);
	}
});

module.exports = ComicPage;