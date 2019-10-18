import React from 'react'
import {  View, Text,TextInput, Button}from'react-native';
class Pajak extends React.Component {
    state = { pajaknya: null, gajiTahunan: null, gaji: null, potonganGaji: null };
    hitungGaji = () => {
        let pajaknya = 0;
        let potonganGaji = 0;
        let gaji = parseInt(this.state.gaji);
        let gajiTahunan = gaji * 12;
        // console.log(gaji);
        if (gajiTahunan >= 50000000 && gajiTahunan <= 240000000) {
            pajaknya = gajiTahunan * 0.05;
            potonganGaji = gajiTahunan - pajaknya;
        } else if (gajiTahunan > 250000000) {
            pajaknya = gajiTahunan * 0.15;
            potonganGaji = gajiTahunan - pajaknya;
        } else {
            pajaknya = 0;
        }

        this.setState({ gajiTahunan: gajiTahunan });
        this.setState({ pajaknya: pajaknya });
        this.setState({ potonganGaji: potonganGaji });
    }
    render() {
        return (
            <View>
                <Text>Hitung Pajak Penghasilan</Text>
                <Text></Text>
                <TextInput style={{ height: 40 }}
                    placeholder="Gaji Bulanan"
                    onChangeText={(InputGaji) => this.setState({ gaji: InputGaji })}
                    value={this.state.gaji}
                />

                <Button title="Hitung Pajak"
                    onPress={() => {
                        this.hitungGaji()
                    }}
                />
                <Text>Gaji Tahunan : {this.state.gajiTahunan}</Text>
                <Text>Kena Pajak    : {this.state.pajaknya}</Text>
                <Text>Gaji Bersih     : {this.state.potonganGaji}</Text>
            </View>
        );
    }
}
 
export default Pajak;