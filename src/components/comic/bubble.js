"use strict"; 

var React = require('react'); 
var FontAwesome = require('react-fontawesome');
var ComicActions = require('../../actions/comicActions');


var Bubble = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
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
            <span style={{ width: "80%", display: "block", margin: "10px auto", padding: "0 auto" }}>
              <input style={{ width: "20%", display: "inline", marginRight: 15 }}
                      type="text"
                      maxLength="50"
                      placeholder="Name"
                      value="">
              </input>
              <input style={{ width: "60%", display: "inline", marginRight: 15 }}
                    type="text" 
                    maxLength="50"
                    placeholder="Words" 
                    value={this.state.text}
                    onChange={this.setBubbleText}
                    onBlur={this.saveBubble}>
              </input>
              <FontAwesome name='arrows-v' style={{ marginRight: 10 }} />
              <FontAwesome name='minus-circle' />
            </span>
          </div>
        );
    }
});

module.exports = Bubble;