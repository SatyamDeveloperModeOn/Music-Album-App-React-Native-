import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const Header = (props) => {

    var showButton = true;

    return(
        <View style={styles.viewStyle}>
            
            <Text style={styles.textStyle}>{props.AppName}</Text>
            <Icon 
                name={props.name}
                type={props.type}
                color={props.color}
                size={20}
                onPress={props.onPress}
                showButton = "false"
                />
        </View>
    );
}

const styles = {
    viewStyle: {
        
        flexDirection: 'row',
        backgroundColor: '#012129',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative',
        paddingLeft: 20,
        paddingRight: 20
    },
    textStyle: {
        
        fontSize: 20,
        fontWeight: '300',
        letterSpacing: 0.3,
        color: '#ffffff',
        alignItems: 'center'
    },
    

}

export default Header;