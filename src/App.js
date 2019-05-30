import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import firebase from 'firebase'
import ApiData from './components/common/ApiData'
import LoginForm from './components/LoginForm'
import Button from './components/common/Button'
import Spinner from './components/common/Spinner'
import Header from './components/common/Header';
import CardSection from './components/common/CardSection';
import Card from './components/common/Card'

class App extends Component {
    
    state = {loggedIn : null}

    componentWillMount(){

        firebase.initializeApp({ 
        apiKey: "AIzaSyCkHLf4yISnbETn6N2bxgiRSMaCC4GrDCw",
        authDomain: "auth-c3a35.firebaseapp.com",
        databaseURL: "https://auth-c3a35.firebaseio.com",
        projectId: "auth-c3a35",
        storageBucket: "auth-c3a35.appspot.com",
        messagingSenderId: "165023218495",
        appId: "1:165023218495:web:568abe1641e6dea5"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn : true });
            } else {
              this.setState({ loggedIn: false });
            }
          }); 
    }

    onButtonPress(){
        firebase.auth().signOut()
            .then(function() {
                console.log('login screen');
            })
            .catch(function(error) {
                console.log('error');
            });
    }
    
    renderContent(){
        switch(this.state.loggedIn){
                case true: {
                return(
                    <View style={styles.firstContainer}>
                        
                        {/* <View style={{flexDirection: 'row'}}>
                            <Header style={{flex:1}} AppName='album'/>
                            
                            <Button style={{flex:1}} onPress = {this.onButtonPress.bind(this)}>
                                    Logout
                            </Button>
                        </View> */}
                        
                        <Header AppName='Albums' name='sign-out' type='font-awesome' color='#e6be1e' 
                        onPress = {()=> Alert.alert(
                            'Are you sure!',
                            'Do you want to exit?',
                            [{text: 'Cancel', onPress: () => console.log('Cancel pressed')},
                            {text: 'Ok', onPress: this.onButtonPress.bind(this)}]
                        )} />
                        <ApiData/>

                    </View>
                        
                         
                )
            }
            case false: return <LoginForm />
            default: return <Spinner size="large"/>
        }
    }

    render(){
        return (
                <View style={{flex : 1}}>
                    {this.renderContent()}
                </View>
            
        );
    }
} 

const styles = {
    firstContainer : {
        flex: 1,
        width: '100%'
    }
}

    
export default App; 
