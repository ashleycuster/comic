"use strict";

var React = require('react');
var Router = require('react-router'); 
var Bubble = require('./bubble');
var Strip = require('./strip');
var ComicStore = require('../../stores/ComicStore');
var ComicActions = require('../../actions/comicActions')


var ComicPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getInitialState: function () {
		return {
			bubbles: ComicStore.getBubbles(),
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
		this.setState({ bubbles: bubbles });
	},

	addBubble: function () {
		ComicActions.addBubble();
	},

	createBubble: function (bubbleObj) {
		return (
				var properties = {
					key: bubbleObj.key,
					character: bubbleObj.character,
					text: bubbleObj.text
				};
				<Bubble {...props}></Bubble>
			);
	},

    render: function () {
		return (
			<div>
				{this.props.bubbles.map(this.createBubble, this)}
				<p onClick={this.addBubble} style={{cursor: 'pointer'}}>Add Speech Bubble</p>
			</div>
			);
	}
});

module.exports = ComicPage;