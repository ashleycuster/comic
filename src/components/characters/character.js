"use strict"; 

var React = require('react'); 
var Body = require('./body');
var Eyes = require('./eyes');
var FontAwesome = require('react-fontawesome');
var ComicActions = require('../../actions/comicActions');


var Character = React.createClass({
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
          <div className="character" style={{ display: "inline-block", width: 100 }}>
            <Body />
            <Eyes />
          </div>
        );
    }
});

module.exports = Character;