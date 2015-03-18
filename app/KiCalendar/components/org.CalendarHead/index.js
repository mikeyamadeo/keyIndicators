/*** @jsx React.DOM */
import React from 'react';
require('./style.scss');

var date = new Date();
var month = date.getMonth();
var day = date.getDate();

var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November"
]

var Header = React.createClass({
	getInitialState: function(){
		return {
			month: months[month],
			day: day
		}
	},
	render: function() {
		return(
			<div>
				<header className="CalendarHeader">
					It is {' '} {this.state.month + " "} {' '} {this.state.day}
				</header>
			</div>
		)
	}
});


export default Header;