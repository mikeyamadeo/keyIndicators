/*** @jsx React.DOM */
import React from 'react';
import './style.scss';

var KiPeriod = React.createClass({
	_styleProps() {
		var styleProps = "Aim";
		var aim = this.props.aim;

		styleProps += ` ${aim.type}`;
		styleProps += aim.planned ? ' planned' : '';
		styleProps += aim.complete ? ' complete' : '';
		
		return styleProps;
	},

	render() {

		return(
			<td onClick={this.props.clickHandler.bind(null, this.props.id)} 
					className={this._styleProps()}>
			</td>
		);
	}
});

export default KiPeriod;