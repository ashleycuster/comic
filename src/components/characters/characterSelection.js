"use strict"; 

var React = require('react'); 
var Character = require('./character');
var FontAwesome = require('react-fontawesome');
var ComicActions = require('../../actions/comicActions');


var CharacterSelection = React.createClass({
  propTypes: {
  },

  getInitialState: function () {
    return {
    };
  },

  // setBubbleText: function (event) {
  //   event.preventDefault();
  //   var value = event.target.value;
  //   return this.setState({ text: value });
  // },

  // setBubbleName: function (event) {
  //   event.preventDefault();
  //   var value = event.target.value;
  //   return this.setState({ name: value });
  // },

  // saveBubble: function(event) {
  //   event.preventDefault();
  //   ComicActions.modifyBubble(this.props.id, this.state.name, this.state.text);
  // },

  // removeBubble: function () {
  //   ComicActions.removeBubble(this.props.id);
  // },

    render: function() {
      return (
          <div className="characterSelect" style={{ textAlign: "center" }}>
            <span>
              <FontAwesome name='caret-left' style={{ cursor: "pointer" }} />
              <FontAwesome name='caret-left' size='5x' style={{ cursor: "pointer" }} />
              <Character />
              <FontAwesome name='caret-right' size='5x' style={{ cursor: "pointer" }} />
              <FontAwesome name='caret-right' style={{ cursor: "pointer" }} />
              </span><br />
            <button className="btn btn-lg" type="button">Save Character</button>
          </div>
        );
    }
});

module.exports = CharacterSelection;