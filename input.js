'use strict'

var React = require('react-native')

var {TextInput, StyleSheet,} = React

var Input = React.createClass({
    getInitialState() {
        return {
            value: this.props.value,
        };
    },
    render() {
        return (
            <TextInput value={this.state.value} style={[styles.input]} onChangeText={(value) => this.setState({value: value})}/>
        );
    },
    getValue: function(){
        return this.state.value
    }
})

var styles = StyleSheet.create({
    input: {
        height: 32,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 7,
        paddingRight: 7,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ccc',
        fontSize: 17,
    },
})

module.exports = Input
