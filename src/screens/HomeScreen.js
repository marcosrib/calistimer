import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Component/Button'
const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>CalisTimer</Text>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>AMRAP</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>Isometria</Button>
        </View>
    )

}
HomeScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#db3041',
        flex: 1
    },
    logo: {
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 111,
        marginBottom: 111,
        fontSize: 48
    },
    btn: { padding: 20 }
})
export default HomeScreen