"use strict";

var React = require('react');
var Router = require('react-router'); 
var Table = require('./table');
var DeckStore = require('../../stores/DeckStore');
var DeckActions = require('../../actions/deckActions');

var Strip = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
	},

	getInitialState: function () {
		return {
			cardsOnTable: DeckStore.getCardsOnTable(),
			isGameOpen: DeckStore.getIsOpen()
		};
	},

	componentWillMount: function () {
		DeckStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		DeckStore.removeChangeListener(this._onChange); 
	},

	_onChange: function () {
		var cardsOnTable = DeckStore.getCardsOnTable();
		var isGameOpen = DeckStore.getIsOpen();
		this.setState({ cardsOnTable: cardsOnTable, isGameOpen: isGameOpen });
	},

	openDeck: function () {
		DeckActions.openDeck();
	},

	dealFiveCards: function () {
		DeckActions.dealFiveCards();
	},

	shuffleDeck: function () {
		DeckActions.shuffleDeck();
	},

	getTableDisplay: function () {
		return this.state.isGameOpen ? "block" : "none";
	},

    render: function () {
		return (
			<div>
				<div style={{ float: "left" }}>
					<input type="submit" value={this.state.isGameOpen ? "Close" : "Open"} className="btn btn-default" onClick={this.openDeck} style={{ margin: 10 }} /> <br/>
					<input disabled={!this.state.isGameOpen} type="submit" value="Deal" className="btn btn-default" onClick={this.dealFiveCards} style={{ margin: 10 }} /> <br/>
					<input disabled={!this.state.isGameOpen} type="submit" value="Shuffle" className="btn btn-default" onClick={this.shuffleDeck} style={{ margin: 10 }} /> <br/>
				</div>
				<div style={{ display: this.getTableDisplay() }}>
					<Table cards={this.state.cardsOnTable} />
				</div>
			</div>
			);
	}
});

module.exports = Strip;