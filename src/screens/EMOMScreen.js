import React, { Component } from 'react'
import { View, Keyboard, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Select from '../Component/Select'
import Title from '../Component/Title'
import Timer from '../Component/Time'
import ProgressBar from '../Component/ProgressBar'
import BackgroundProgress from '../Component/BackgroundProgress'
import Sound, { setCategory } from 'react-native-sound'

const alert = require('../../assets/sound/alarm.m4a')
class EMOMScreen extends Component {
    state = {
        keyboardTovisible: false,
        alert: [0],
        countDow: 1,
        time: '5',
        isRunning: false,
        count: 0,

        countdowValue: 5
    }

    componentDidMount() {
        Sound.setCategory('Playback', true)
        this.alert = new Sound(alert)

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
    playAlert =() => {
       const resto = this.state.count % 60   
       if(this.state.alert.indexOf(resto)>=0){
           this.alert.play()
       }  
       if(resto>= 55 && resto <=60){
           this.alert.play()
       }
    }
    play = () => {
        this.setState({ isRunning: true })
        const count = () => {
            this.setState({ count: this.state.count + 1 }, () => {
                this.playAlert()
                if (this.state.count === parseInt(this.state.time) * 60) {
                    clearInterval(this.countTimer)
                }
            })
        }
        if (this.state.countDow === 1) {
            this.countDowTimer = setInterval(() => {
                this.alert.play()

                this.setState({ countdowValue: this.state.countdowValue - 1 }, () => {

                    if (this.state.countdowValue === 0) {
                        clearInterval(this.countDowTimer)
                        this.countTimer = setInterval(count, 1000)
                    }
                })
            }, 1000)
        } else {
            this.countTimer = setInterval(count, 1000)
        }
    }
    render() {
        if (this.state.isRunning) {
            const percMinute = parseInt(((this.state.count % 60) / 60) * 100)
            const percTime = parseInt((this.state.count / 60) / parseInt(this.state.time) * 100)
            return (
                <BackgroundProgress percentage={percMinute}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Timer time={this.state.count} />
                        <ProgressBar porcentege={percTime} />
                        <Timer time={parseInt(this.state.time) * 60 - this.state.count} type='text2' appendedText=' restates' />
                        <Text style={styles.countDow}>{this.state.countdowValue}</Text>
                       
                    </View>
                </BackgroundProgress>

            )
        } else {

            return (
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={styles.container}>
                        <Title title={'EMOM'} subTitle={'Every Minute on the Minute'} style={{ paddingTop: this.state.keyboardTovisible ? 20 : '50%' }} />
                        <Select
                            current={this.state.alert}
                            label={'Alertas'}
                            options={[
                                {
                                    id: 0,
                                    label: '0s'
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
                            onSelect={opt => this.setState({ alert: opt })}
                        />
                        <Select
                            current={this.state.countDow}
                            label={'Contagem regresiva'}
                            options={[
                                { id: 1, label: 'Sim' },
                                { id: 0, label: 'Não' }
                            ]}
                            onSelect={opt => this.setState({ countDow: opt })}
                        />
                        <Text style={styles.label} >Quantos minutos</Text>
                        <TextInput style={styles.input} keyboardType='numeric' value={this.state.time} onChangeText={text => this.setState({ time: text })} />
                        <Text style={styles.label} >minutos</Text>
                        <TouchableOpacity onPress={this.play}>
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
        fontSize: 35,
        textAlign: 'center'
    },
    play: {
        fontSize: 35,
        textAlign: 'center'
    },
    countDow: {
        fontFamily: 'Ubuntu-Bold',
        fontSize:144,
        color:'white',
        textAlign:'center'
    }

})
export default EMOMScreen