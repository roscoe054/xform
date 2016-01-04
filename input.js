'use strict'

var React = require('react-native')

var {TextInput, StyleSheet,} = React

var Input = React.createClass({
    getInitialState() {
        return {
            value: this.props.value,
            editable: this.props.editable,
        };
    },
    render() {
        var st = this.state

        return (
            <TextInput value={st.value}
                style={[styles.input, st.editable ? null : styles.disabled]}
                onChangeText={(value) => this.setState({value: value})}
                editable={st.editable}/>
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
        color: '#333',
        fontSize: 17,
    },
    disabled: {
        color: '#aaa'
    },
})

module.exports = Input
