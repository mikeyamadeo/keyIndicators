/*** @jsx React.DOM */
import React from 'react';
import KiAim from 'atm.KiAim';
import KiActions from 'KiActions';
import dateUtils from 'dateUtils';

var KiPeriod = React.createClass({
	handleAimInteraction(aimId) {
		KiActions.aimInteraction(this.props.ki._id, aimId);
	},

	render() {
		var startDate = this.props.period.startDate;
		var aims = [];

		for (let i = 0; i < this.props.period.span; i ++) {
			var dateKey = dateUtils.addDays(startDate, i);
			aims.push(<KiAim key={dateKey} 
											id={dateKey} 
											aim={this.props.ki.aimMap[dateKey]} 
											clickHandler={this.handleAimInteraction}/>);
		}

		return(
			<tr>
				<td>{this.props.ki.title}</td>
					{aims}
				<td>/</td>
			</tr>
		);
	}
});

export default KiPeriod;