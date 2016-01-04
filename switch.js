'use strict'

var React = require('react-native')
var extend = require('extend')

var {SwitchIOS,} = React

var Switch = React.createClass({
    getInitialState() {
        return {
            switchValue: this.props.value,
        };
    },
    render() {
        return (
            <SwitchIOS onValueChange={(value) => this.setState({switchValue: value})}
             value={this.state.switchValue} />
        );
    }
})

module.exports = Switch
