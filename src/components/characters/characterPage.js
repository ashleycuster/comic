"use strict";

var React = require('react');
var Router = require('react-router'); 
var Navigation = require('../agencyBootstrap/navigation');
var Section = require('../agencyBootstrap/section');
var Footer = require('../agencyBootstrap/footer');
var SavedCharacters = require('./savedCharacters');
var CharacterSelection = require('./characterSelection');

var ComicStore = require('../../stores/ComicStore');
var ComicActions = require('../../actions/comicActions');
var uuid = require('node-uuid');



var CharacterPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getInitialState: function () {
		return {
			characters: ComicStore.getCharacters()
		};
	},

	componentWillMount: function () {
		ComicStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		ComicStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var characters = ComicStore.getCharacters();
		this.setState({ characters: characters });
	},

	addBubble: function () {
		ComicActions.saveCharacter();
	},

    render: function () {
		return (
			<Section title="Characters" subheading="Choose the look of your characters!">
				<SavedCharacters />
				<CharacterSelection />
			</Section>
			);
	}
});

module.exports = CharacterPage;