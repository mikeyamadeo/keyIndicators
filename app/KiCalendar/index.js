/*** @jsx React.DOM */
import React from 'react';
import CalendarHead from 'org.CalendarHead';
import KiPeriodContainer from 'org.KiPeriodContainer';
import KiStore from 'KiStore';

var KiCalendar = React.createClass({
	getInitialState() {
		return {
			timePeriod: KiStore.currentTimePeriod()
		}
	},

	render() {
		return(
			<div>
				<CalendarHead />
				<KiPeriodContainer period={this.state.timePeriod} />
			</div>
		);
	}
});

export default KiCalendar;