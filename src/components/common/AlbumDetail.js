import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ( {album} ) => {

    return(

        <Card>
            <CardSection>
                <View style={styles.containerThumbnailStyle}>
                    <Image style= {styles.thumbnailStyle} source={{uri: album.thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text style={styles.headerTextStyle}>{album.artist}</Text>
                </View>
            </CardSection>
                
            <CardSection>
                <Image style={styles.imageStyle} source={{uri: album.image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL('https://www.google.com')}>
                    Buy Now
                </Button>
                
            </CardSection>
        </Card>
    );
}

const styles = {
    
    thumbnailStyle: {
        
        height: 50,
        width: 50,

    },
    containerThumbnailStyle:{
        
        //borderWidth: 2,
        //borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10 
    },
    headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 18
    },
    imageStyle: {
		height: 400,
		flex: 1,
		width: null
    },
    containerButtonStyle:{
        alignItems: 'stretch',
        borderWidth: 2,
        borderColor: 'yellow'
    },
    textStyle:{
        textAlign: 'center'
    }
    

}


export default AlbumDetail;