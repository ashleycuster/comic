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
      text: this.props.text,
      name: this.props.name
    };
  },

  setBubbleText: function (event) {
    event.preventDefault();
    var value = event.target.value;
    return this.setState({ text: value });
  },

  setBubbleName: function (event) {
    event.preventDefault();
    var value = event.target.value;
    return this.setState({ name: value });
  },

  saveBubble: function(event) {
    event.preventDefault();
    ComicActions.modifyBubble(this.props.id, this.state.name, this.state.text);
  },

  removeBubble: function () {
    ComicActions.removeBubble(this.props.id);
  },

    // bubble needs a dropdown to select character, input textbox, buttons to modify and delete
    render: function() {
      var vm = this;
      return (
          <div className="bubbles">
            <span style={{ width: "80%", display: "block", margin: "10px auto", padding: "0 auto" }}
              onBlur={this.saveBubble}>
              <input style={{ width: "20%", display: "inline", marginRight: 15 }}
                      type="text"
                      maxLength="50"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.setBubbleName}>
              </input>
              <input style={{ width: "60%", display: "inline", marginRight: 15 }}
                    type="text" 
                    maxLength="50"
                    placeholder="Words" 
                    value={this.state.text}
                    onChange={this.setBubbleText}>
              </input>
              <FontAwesome name='arrows-v' style={{ marginRight: 10 }} />
              <FontAwesome name='minus-circle' onClick={this.removeBubble} style={{ cursor: 'pointer' }} />
            </span>
          </div>
        );
    }
});

module.exports = Bubble;