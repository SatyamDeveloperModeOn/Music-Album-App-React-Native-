import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = (props) => {

    return(

        <View style = {styles.containerStyle}>
            <ActivityIndicator size = {props.size || 'large'} />
        </View>
    );
}

const styles = {

    containerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignText: 'center'
    }
}

export default Spinner;