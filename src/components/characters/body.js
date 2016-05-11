"use strict"; 

var React = require('react'); 
var FontAwesome = require('react-fontawesome');
var ComicActions = require('../../actions/comicActions');


var Body = React.createClass({
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
          <div className="body">
          </div>
        );
    }
});

module.exports = Body;