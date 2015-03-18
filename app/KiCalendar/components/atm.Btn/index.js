/*** @jsx React.DOM */
import React from 'react';

var Btn = React.createClass({
	render() {
		return(
			<div>
				<button onClick={this.props.action}>
					{this.props.copy}
				</button>
			</div>
		);
	}
});

export default Btn;