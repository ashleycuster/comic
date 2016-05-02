"use strict"; 

var React = require('react'); 

var CircleCharacter = React.createClass({
  propTypes: {
    info: React.PropTypes.object.isRequired
  },

    render: function() {
      var vm = this;
      return (
          <div className="Bubble" style={{ backgroundColor: this.getColor() }}>
              <p className="BubbleInfo">{this.getBubbleText()}</p>
              <p className="BubbleAction" onClick={this.flipBubble}>Flip!</p>
              <p className="BubbleAction" onClick={this.swapBubble}>Swap!</p>
          </div>
        );
    }
});

module.exports = CircleCharacter;