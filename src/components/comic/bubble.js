"use strict"; 

var React = require('react'); 
var ComicActions = require('../../actions/comicActions');


var Bubble = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    character: React.PropTypes.number.isRequired,
    text: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      text: this.props.text
    };
  },

  setBubbleText: function (event) {
    event.preventDefault();
    var value = event.target.value;
    return this.setState({ text: value });
  },

  saveBubble: function(event) {
    event.preventDefault();
    var value = event.target.value;
    ComicActions.modifyBubble(this.props.id, value);
  },

    // bubble needs a dropdown to select character, input textbox, buttons to modify and delete
    render: function() {
      var vm = this;
      return (
          <div className="bubbles">
              <input style={{ width: "60%", display: "block", margin: "15px auto" }}
                    type="text" 
                    placeholder="Enter text here" 
                    value={this.state.text}
                    onChange={this.setBubbleText}
                    onBlur={this.saveBubble}>
              </input>
          </div>
        );
    }
});

module.exports = Bubble;