import React, { Component } from 'react'
import { View, Keyboard, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Select from '../Component/Select'
import Title from '../Component/Title'

class EMOMScreen extends Component {
    state = {
        keyboardTovisible: false,
        alert: 0,
        countDow: 1,
        time: '25',
        isRunning: false,

        countdowValue: 5
    }

    componentDidMount() {
        this.kbShow = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({
                keyboardTovisible: true
            })
        })
        this.kbHide = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({
                keyboardTovisible: false
            })
        })
    }
    componentWillUnmount() {
        this.kbShow.remove()
        this.kbHide.remove()
    }
    play =()=> {
        this.setState({ isRunning: true })
        if(this.state.countDow=== 1){
            this.countDowTimer = setInterval(()=>{
                
                this.setState({countdowValue: this.state.countdowValue -1},()=>{
                    if(this.state.countdowValue === 0){
                        clearInterval(this.countDowTimer)
                    }
                })
            },1000)
        }
    }
    render() {
        if (this.state.isRunning) {
            return (
                <View style={styles.container}>
                    <Text>{this.state.countdowValue}</Text>
                </View>

            )
        } else {

            return (
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={styles.container}>
                        <Title title={'EMOM'} subTitle={'Every Minute on the Minute'} style={{ paddingTop: this.state.keyboardTovisible ? 20 : 200 }} />
                        <Select
                            current={this.state.alert}
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
                            ]}
                            onSelect={opt => setState({ alert: opt })}
                        />
                        <Select
                            current={this.state.countDow}
                            label={'Contagem regresiva'}
                            options={[
                                { id: 1, label: 'Sim' },
                                { id: 0, label: 'Não' }
                            ]}
                            onSelect={opt => setState({ countDow: opt })}
                        />
                        <Text style={styles.label} >Quantos minutos</Text>
                        <TextInput style={styles.input} keyboardType='numeric' value={this.state.time} onChangeText={text => this.setState({ time: text })} />
                        <Text style={styles.label} >minutos</Text>
                        <TouchableOpacity onPress={this.play }>
                            <Text style={styles.play}>Play</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            )
        }
    }
}

EMOMScreen.navigationOptions = {
    header: null
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#db3041',
        flex: 1,

    },
    label: {
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        opacity: 1,
        textAlign: 'center'
    },
    input: {
        fontSize: 40,
        textAlign: 'center'
    },
    play: {
        fontSize: 35,
        textAlign: 'center'
    }

})
export default EMOMScreen