"use strict"; 

var React = require('react'); 
var DeckActions = require('../../actions/deckActions');


var Panel = React.createClass({
  propTypes: {
    info: React.PropTypes.object.isRequired
  },

    flipPanel: function () {
      DeckActions.flipPanel(this.props.info);
    },

    swapPanel: function () {
      DeckActions.swapPanel(this.props.info);
    },

    getPanelText: function () {
      if (this.props.info.isFaceUp) {
        return String(this.props.info.value) + " of " + this.props.info.suit;
      }
    },

    getColor: function () {
      return this.props.info.isFaceUp ? "white" : "#ffee58";
    },

    render: function() {
      var vm = this;
      return (
          <div className="Panel" style={{ backgroundColor: this.getColor() }}>
              <p className="PanelInfo">{this.getPanelText()}</p>
              <p className="PanelAction" onClick={this.flipPanel}>Flip!</p>
              <p className="PanelAction" onClick={this.swapPanel}>Swap!</p>
          </div>
        );
    }
});

module.exports = Panel;