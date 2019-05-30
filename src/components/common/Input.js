import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = (props) => {

    return(
        <View style = {styles.containerStyle}>
            <Text style = {styles.labelStyle}>
                {props.label}
            </Text>
            <TextInput 
                onChangeText = {props.onChangeText}
                value = {props.value}
                placeholder = {props.placeholder}
                autoCorrect = {false}
                style = {styles.inputStyle}
                secureTextEntry = {props.secureTextEntry}
                />
        </View>

    );
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd' 
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
        flex: 1,
        color: '#012129'
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};


export default Input;