import React, {Component} from 'react'
import Header from './common/Header'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import Spinner from './common/Spinner'


class LoginForm extends Component {

    state = {email: '', password: '', error: '', loading: false}

    onButtonPress (){
        console.log('button pressed.');

        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        });
    }

    onLoginSuccess(){
        this.setState ({
            email: '',
            password: '',  
            loading: false,
            error: ''
        })
        console.log('success');
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed!',
            loading: false
        })
        console.log('login fail');
    }

    renderButton() {
		if(this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
						Log in
			</Button>
		);
	}

    render(){
        return(
            <View style = {styles.mainContainer}>

                <View style= {styles.firstContainer}>
                    <Header AppName="Authentication"/>
                </View>
                
                <View style = {styles.secondContainer} >
                    <Card>
                        <CardSection>
                            <Input 
                                label = "Email"
                                placeholder = "user@gmail.com"
                                value = {this.state.email}
                                onChangeText = { email => this.setState({ email }) }
                            />
                        </CardSection>

                        <CardSection>
                            <Input 
                                label = "Password"
                                placeholder = "********"
                                value = {this.state.password}
                                onChangeText = { password => this.setState({ password }) }
                                secureTextEntry 
                            />
                        </CardSection>

                        <CardSection>
                            <Text style={styles.errorTextStyle}>
                                {this.state.error}
                            </Text>
                        </CardSection>

                        <CardSection>
                                {this.renderButton()}
                        </CardSection>
                    </Card>    
                </View>
            </View>
        );
    }
}

const styles = {

    mainContainer : {
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#012129'
    },

    secondContainer : {
        width: '90%'

    },
    errorTextStyle: {
        flex: 1,
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        backgroundColor: '#ffffff',
        marginLeft: 20
    }
}
export default LoginForm ;





































