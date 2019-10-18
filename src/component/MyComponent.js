import React from 'react';
import {View, Text} from 'react-native';

class MyComponent extends React.Component{
    //Life cycle React-native
    constructor(){
        super()
        this.name = 'Mys coll Component'
    }

    componentWillMount(){
        this.name = 'Ubah nama komponen';
    }

    render(){
        return(
            <View>
                <Text>{this.name}</Text>
            </View>
        );
    }
}

export default MyComponent;