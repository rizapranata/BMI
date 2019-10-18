import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
       
    },

    bgImage: {
        alignItems: 'center',
        width: 360,
        height: 650
    },

    textHead: {
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40
    },

    textLoginApps: {
        marginTop: 20,
        fontSize: 20,
        color: 'white',
    },
    textUsername: {
        textAlign: 'center',
        marginTop: 50,
    },

    inputText: {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 10,
    },

    inputNilai: {
        textAlign: 'center',
        marginTop: 20,
        color: 'white',
    },

    button : {
        borderRadius: 30,
        marginTop: 20,
    },

    icon: {
        width: 60, height: 60,
        margin: 25,
    },

    imageIcon: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'row',
    }

});

export {styles}