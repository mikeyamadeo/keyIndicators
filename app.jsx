/*** @jsx React.DOM */


            var APP = React.createClass({
                getInitialState:function(){
                    return {
                        red: 0,
                        green: 50,
                        blue: 0
                    }
                },
                update: function(e) {
                    this.setState({
                        red: this.refs.red.refs.range.getDOMNode().value,
                        green: this.refs.green.refs.range.getDOMNode().value,
                        blue: this.refs.blue.refs.range.getDOMNode().value
                    })
                },
                render:function(){
                    return (
                        <div>
                        <hr/>
                        <Slider ref="red" update={this.update} />
                        <label>{this.state.red}</label>
                        <Slider ref="green" update={this.update} />
                        <label>{this.state.green}</label>
                        <Slider ref="blue" update={this.update} />
                        <label>{this.state.blue}</label>
                        </div>
                    )
                }
            });

            var Slider = React.createClass({
                render:function(){
                    return (
                        <div>
                        <input ref="range" type="range" min="0" max="255" onChange={this.props.update} />
                        </div>
                    )
                }
            });

            React.renderComponent(<APP />, document.body)