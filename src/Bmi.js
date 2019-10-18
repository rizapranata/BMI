import React, { Component } from 'react';

import {
  View, Image, Text, ImageBackground, TextInput, Button, TouchableOpacity,
} from 'react-native';
import { styles } from './component/styleBmi'

 
export default class Bmi extends Component {
  state = { beratBadanState: null, tinggiBadanState: null, bmi: null, berat:null, tinggiM: null };

  hitung = () => {
    let beratBadan = parseInt(this.state.beratBadanState);
    let tinggiBadan = parseInt(this.state.tinggiBadanState);

    let tinggiM = tinggiBadan / 100;
    tinggiM = tinggiM * tinggiM;
    let berat = beratBadan / tinggiM;
    console.log('tinggi' + tinggiBadan);
    console.log('berat '+ berat);
    if (berat < 18) {
      bmi = 'Kekurangan Berat Badan';
    } else if (berat > 18.5 && berat <= 24.9) {
      bmi = 'Normal'
    } else if (berat >= 25 && 29.9) {
      bmi = 'Kelebihan';
    } else if(berat >= 30 ){
      bmi = 'Kegemukan';
    }else{
      bmi = 'Keterlaluan';
    }
    this.setState({ bmi: bmi });
  }

  // img = () => {
  //   if(bmi === 'Kekurangan Berat Badan'){
  //     return(
  //       <Image>

  //       </Image>
  //     );
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('./assets/bg4.jpg')}>
          <Text style={styles.textLoginApps}>Berat Badan Ideal</Text>
          <Text style={styles.inputNilai}>Berat Badan</Text>
          <TextInput style={styles.inputText} 
            onChangeText={(berat) => this.setState({ beratBadanState: berat })}
            value={this.state.beratBadanState}
          />

          <Text style={styles.inputNilai}>Tinggi</Text>
          <TextInput style={styles.inputText}
            onChangeText={(tinggi) => this.setState({ tinggiBadanState: tinggi })}
            value={this.state.tinggiBadanState}
          />
            <Text>{'\n'}</Text>
            <Button title="Kalkulasi" onPress={()=>
               this.hitung()}/>
      
          <Text style={styles.inputNilai}>BMI</Text>
          <TextInput style={styles.inputText}>
            <Text>{this.state.bmi}</Text>
          </TextInput>
          <Text></Text>

        </ImageBackground>
      </View>
    );
  }
}

