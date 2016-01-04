'use strict';

var React = require('react-native');
var f = require('./form');

var {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
} = React;

var model = {
        studentName: {
            type: f.fieldType.String,
            label: "学生姓名",
            value: "Giulio",
            disabled: true,
            placeholder: "请填写姓名"
        },
        age: {
            type: f.fieldType.Number,
            label: "年龄",
            value: 18,
            placeholder: "请填写年龄"
        },
        password: {
            type: f.fieldType.Password,
            label: "密码",
            value: "",
            placeholder: "请填写密码"
        },
        year: {
            type: f.fieldType.Spinner,
            label: "入学年份",
            value: "2015",
        },
        rememberMe: {
            type: f.fieldType.Boolean,
            label: "记住我",
            value: true,
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
                <Form model={model} ref="form"/>
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#68CBE0'>
                    <Text style={styles.buttonText}>提交</Text>
                </TouchableHighlight>
            </View>
        );
    },
    onPress : function() {
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            alert(JSON.stringify(value)); // value here is an instance of Person
        }
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#26B4D3',
    },
    buttonText: {
        fontSize: 17,
        color: '#fff',
    }
});

AppRegistry.registerComponent('xform', () => xform);
