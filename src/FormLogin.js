import React, {Component} from 'react';

import {
    StyleSheet, View, Image, Text, ImageBackground, TextInput, Button, TouchableOpacity,
} from 'react-native';
import { styles } from './component/styleFormLogin'

export default class FormLogin extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('./assets/bg4.jpg')}>
                    <Image style={styles.logo} source={require('./assets/react2.png')} />
                    <Text style={styles.textLoginApps}>Login Apps</Text>
                    <Text style={styles.inputPass}>User Name</Text>
                    <TextInput style={styles.inputText}></TextInput>
                    <Text style={styles.inputPass}>Password</Text>
                    <TextInput style={styles.inputText}></TextInput>
                    <Text></Text>
                    <View style={styles.button}>
                        <Button title="Login User"/>
                    </View>
                    <View style={styles.imageIcon}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('./assets/logo-wa.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('./assets/androidlogo.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('./assets/icon1.png')} />
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>
            </View>
        );
    }
}

