/*** @jsx React.DOM */
import React from 'react';
import Btn from 'atm.Btn';
import fbu from 'firebaseUtils';
import './style.scss';


var KiPeriodHead = React.createClass({
	openAddKiForm() {
		alert("I'm a ki form overlay homieeeeees!");

	},

	render() {
		return(
			<thead className="KiPeriodHead">
				<tr>
					<th>
						<Btn action={this.openAddKiForm} copy="+"/>
					</th>
					<th>Su</th>
					<th>M</th>
					<th>T</th>
					<th>W</th>
					<th>Th</th>
					<th>F</th>
					<th>Sa</th>
					<th>
						~
					</th>
				</tr>
			</thead>
		);
	}
});

export default KiPeriodHead;