import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({onPress,children}) => {

    return(
        <TouchableOpacity onPress= {onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}> {children} </Text>

        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#e6be1e',
        margin: 5
    },
    textStyle: {
        alignSelf: 'center',
		color: '#e6be1e',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
    }
}

export default Button;