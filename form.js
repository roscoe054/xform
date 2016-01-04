'use strict'

var React = require('react-native')
var extend = require('extend')

var Switch = require('./switch');

var {StyleSheet, Text, View, TouchableOpacity, TextInput, SwitchIOS,} = React

var fieldType = {
    String: "string",
    Number: "number",
    Boolean: "boolean"
}, formItemId = 0

var inited = false
var Form = React.createClass({
    getInitialState: function () {
        return {}
    },
    getDefaultProps: function () {
        return {}
    },
    componentDidMount: function(){
        inited = true
    },
    render: function () {
        var model = this.props.model,
            values = this.props.value,
            rows = [],
            defaultRowModel = {
                style: {},
                onChange: function(){console.log(this);}
            }

        for (var i in model) {
            var rowModel = extend(defaultRowModel, model[i]),
                rowContent = null

            switch (rowModel.type) {
                case "number":
                case "string":
                    rowContent = <TextInput style={[styles.input]} value={rowModel.value} />
                    break;
                case "boolean":
                    rowContent = <Switch style={styles.opeComponent} value={rowModel.value} />
                    break;
                default:
            }

            rows.push(
                <View key={formItemId++} style={styles.operation}>
                    <Text style={[styles.label]}>{i}</Text>
                    {rowContent}
                </View>
            )
        }

        return (
            <View style={styles.container}>
                {rows}
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        color: "#00afc7",
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    opeComponent: {
        marginTop: 5
    },
    input: {
        height: 32,
        marginBottom: 5,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 7,
        paddingRight: 7,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
    },
})

module.exports = {
    Form: Form,
    fieldType: fieldType
}
