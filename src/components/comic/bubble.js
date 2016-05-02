"use strict"; 

var React = require('react'); 
var ComicActions = require('../../actions/comicActions');


var Bubble = React.createClass({
  propTypes: {
    key: React.PropTypes.number.isRequired,
    character: React.PropTypes.number.isRequired,
    text: React.PropTypes.string
  },

    // bubble needs a dropdown to select character, input textbox, buttons to modify and delete
    render: function() {
      var vm = this;
      return (
          <div className="bubbles">
              <input placeholder="Enter text here" value={this.props.text}></input>
          </div>
        );
    }
});

module.exports = Bubble;