/*** @jsx React.DOM */
var APP = React.createClass({
    render: function() {
        return ( <h1 > Hello cats and dogs</h1>)
    }
});

React.renderComponent( <APP /> , document.body)