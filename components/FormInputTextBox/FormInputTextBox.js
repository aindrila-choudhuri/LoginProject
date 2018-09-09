import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

export default class FormInputTextBox extends PureComponent {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.reference = this.reference.bind(this);
    }
    onChangeText(event) {
        if (this.props.onChangeText) {
            this.props.onChangeText(this.props.fieldName, event.nativeEvent.text);
        }
    }
    onBlur() {
        if (this.props.onBlur) { 
            this.props.onBlur(this.props.validateFieldName, this.props.value);
        }
    } 
    onSubmitEditing() {
        if (this.props.onSubmitEditing) {
            this.props.onSubmitEditing(this.props.fieldName);
        }
    }   
    reference(input) {        
        if (this.props.reference) {
            this.props.reference(input, this.props.fieldName);
        }
    }       
    render() {
        return (
            <View style={styles.sectionStyle}>
                <TextInput 
                value={this.props.value}
                ref={this.reference}
                placeholder={this.props.placeholder}
                style={styles.inputStyle}
                placeholderStyle= {styles.placeholderStyle}
                secureTextEntry={this.props.secureTextEntry}
                onChange={this.onChangeText}
                onBlur={this.onBlur}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionStyle: {
        height: 40,
        marginLeft: 38,
        marginRight: 38,
        flexDirection: 'row',
        
        borderColor: '#ccc',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 25,
        width: 200
    },
    inputStyle: {  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 20,
        fontWeight: 'normal',
        color: '#404040',
        height: 42,
        width: Dimensions.get('window').width
    }
});
