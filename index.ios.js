'use strict';

var React = require('react-native');
var f = require('./form');

var {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    SwitchIOS
} = React;

var model = {
        name: {
            type: f.fieldType.String,
            name: "name",
            value: "Giulio"
        },
        age: {
            type: f.fieldType.Number,
            name: "name",
            value: "18"
        },
        rememberMe: {
            type: f.fieldType.Boolean,
            value: true
        }
    },
    Form = f.Form

var xform = React.createClass({
    getInitialState() {
        return {
            value: {
                name: 'Giulio',
                age: '18'
            }
        };
    },
    onChange(value) {
        this.setState({value});
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Form model={model}/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    operation: {
        marginTop: 20
    },
    opeComponent: {
        marginTop: 5
    },
    input: {
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
});

AppRegistry.registerComponent('xform', () => xform);
