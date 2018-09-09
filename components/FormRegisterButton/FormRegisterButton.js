import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class FormRegisterButton extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                disabled={this.props.isDisable}
                style={styles.reg_buttonStyle}
                onPress={this.props.onPress}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.reg_whiteFontStyle}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    reg_buttonStyle: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',       
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#00BCD4'
    },
    reg_whiteFontStyle: {
        height: 28,
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 28,
        marginRight: 10,
        marginLeft: 10
    }
});
