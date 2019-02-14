import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Select from '../Component/Select'
import Title from '../Component/Title'

const EMOMScreen = props => {
    return (
        <View style={styles.container}>
            <Title title={'EMOM'} subTitle={'Every Minute on the Minute'} />
            <Select
                current={0}
                label={'Alertas'}
                options={[
                    {
                        id: 0,
                        label: 'desligado'
                    },
                    {
                        id: 15,
                        label: '15s'
                    },
                    {
                        id: 30,
                        label: '30s'
                    },
                    {
                        id: 45,
                        label: '45s'
                    }
                ]} />
            <Select
                current={0}
                label={'Contagem regresiva'}
                options={[
                    { id: 1, label: 'Sim' },
                    { id: 0, label: 'Não' }
                ]} />
        </View>
    )
}

EMOMScreen.navigationOptions = {
    header: null
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#db3041',
        flex: 1,
        paddingTop: 200
    },
})
export default EMOMScreen