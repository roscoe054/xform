'use strict'

var React = require('react-native')

var {SwitchIOS,} = React

var Switch = React.createClass({
    getInitialState() {
        return {
            value: this.props.value,
        };
    },
    render() {
        return (
            <SwitchIOS value={this.state.value}
                       onValueChange={(value) => this.setState({value: value})}
            />
        );
    },
    getValue: function(){
        return this.state.value
    }
})

module.exports = Switch
