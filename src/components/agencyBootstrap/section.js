"use strict";

var React = require('react');

var Section = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		subheading: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
				    <section id="services">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-12 text-center">
				                    <h2 className="section-heading">{this.props.title}</h2>
				                    <h3 className="section-subheading text-muted">{this.props.subheading}</h3>
				                </div>
				            </div>
				            {this.props.children}
				        </div>
				    </section>
			);
	}
});

module.exports = Section;