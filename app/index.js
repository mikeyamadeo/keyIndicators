/*** @jsx React.DOM */
import React from 'react';
import KiCalendar from './KiCalendar';
import KiActions from 'KiActions';
require('./styles/main.scss');


var App = React.createClass({
	componentDidMount() {
		KiActions.appLoaded();
	},

  render: function() {
    return(
      <div>
        <KiCalendar />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));