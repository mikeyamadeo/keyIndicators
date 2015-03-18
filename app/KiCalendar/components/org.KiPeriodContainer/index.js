/*** @jsx React.DOM */
import React from 'react';
import KiPeriodHead from 'mol.KiPeriodHead';
import KiPeriodList from 'org.KiPeriodList';
import './style.scss';

var KiPeriodContainer = React.createClass({
	render() {
		return(
			<table className="KiPeriodContainer">
				<KiPeriodHead />
				<KiPeriodList period={this.props.period} />
			</table>
		);
	}
});

export default KiPeriodContainer;