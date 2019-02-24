import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Select extends Component {
    state = {
        current: ''
    }
    handlePress = opt => () => {
        const { current } = this.state

        if (Array.isArray(current)) {
            let newCurrent = current
             const i = current.indexOf(opt) 
           // const i = current.includes(opt)
            console.warn(i);
            //console.warn(opt);
            //console.warn(current);
             if(i>=0){
            //if (i === true) {
                newCurrent = [...current]
                newCurrent.splice(i, 1)

            } else {
                newCurrent = [...current, opt]
            }
            this.setState({ current })
            if(this.props.onSelect){
               this.props.onSelect(newCurrent)
            }
        } else {
            if(this.props.onSelect){
                this.props.onSelect(opt)
             }
            this.setState({
                current: opt
            })
            
        }


    }
    componentDidMount() {
        this.setState({
            current: this.props.current
        })

    }
    checkItem = item => {
        const { current } = this.state
        if (Array.isArray(current)) {
            return current.indexOf(item) >= 0
        }
        return current === item
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
                        let value = ''
                        if (typeof opt === 'object') {
                            id = opt.id
                            value = opt.label
                        }
                        if (typeof opt === 'string') {
                            id = opt
                            value = opt
                        }

                        return (
                            <TouchableOpacity
                                key={id}
                                style={this.checkItem(id) ? styleSelect.optSelected : null}
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