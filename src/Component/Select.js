import React ,{Component} from 'react'
import {Text,View, TouchableOpacity, StyleSheet} from  'react-native'

class Select extends Component {
    state = {
        current: ''
    }
    handlePress = id => () => {
        this.setState({
            current: id
        })
    }
    componentDidMount() {
        this.setState({
            current: this.props.current
        })

    }
    render() {
        const { options, label } = this.props
        const { current } = this.state

        return (
            <View style={{ flex: 1 }}>
                <Text style={styleSelect.label}>{label}</Text>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                    {options.map(opt => {
                        let id = ''
                        let value =''
                        if(typeof opt ===  'object'){
                            id = opt.id
                            value=opt.label
                        }
                        return (
                            <TouchableOpacity
                                key={id}
                                style={id === current ? styleSelect.optSelected : null}
                                onPress={this.handlePress(id)}
                            >
                                <Text style={styleSelect.optLabel}>{value}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
             
            </View>
        )
    }
}
export default Select
const styleSelect = StyleSheet.create({
    label: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    optLabel: {
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        opacity: 1
    },
    optSelected: {
        backgroundColor: 'rgba(255,255,255,0.6)'
    }

})