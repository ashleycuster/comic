"use strict"; 

var React = require('react'); 
var FontAwesome = require('react-fontawesome');
var ComicActions = require('../../actions/comicActions');


var SavedCharacters = React.createClass({
  // propTypes: {
  //   id: React.PropTypes.string.isRequired,
  //   name: React.PropTypes.string,
  //   text: React.PropTypes.string
  // },

  // getInitialState: function () {
  //   return {
  //     text: this.props.text,
  //     name: this.props.name
  //   };
  // },

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

    // bubble needs a dropdown to select character, input textbox, buttons to modify and delete
    render: function() {
      var vm = this;
      return (
          <div className="savedCharacters">
          </div>
        );
    }
});

module.exports = SavedCharacters;