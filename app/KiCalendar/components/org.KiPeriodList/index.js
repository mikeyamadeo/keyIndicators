/*** @jsx React.DOM */
import React from 'react';
import KiPeriod from 'mol.KiPeriod';
import KiStore from 'KiStore';

var KiPeriodList = React.createClass({
	getInitialState() {
		return {
			keyIndicatorList: KiStore.getActiveKi(this.props.period)
		}
	},

	componentDidMount() {
		KiStore.addChangeListener(this._handleStoreChange);
	},

	componentWillUnmount() {
		KiStore.removeChangeListener(this._handleStoreChange);
	},

	_handleStoreChange() {
		this.setState({
			keyIndicatorList: KiStore.getActiveKi(this.props.period)
		});
	},

	render() {
		var list = this.state.keyIndicatorList.map(function(item, index) {
			return <KiPeriod ki={item} period={this.props.period}/>
		}.bind(this));

		return(
			<tbody>
				{list}
			</tbody>
		);
	}
});

export default KiPeriodList;