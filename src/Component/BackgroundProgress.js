import React, { Component } from 'react'
import { View, Animated } from 'react-native'

class BackgroundProgress extends Component {
    constructor(props) {
        super(props)
        this.tamanho = new Animated.Value(0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.percentage !== this.props.percentage) {
            
            Animated.timing(this.tamanho, {
                toValue: this.props.percentage,
                duration: 500
            }).start()
        }
    }
    render(){
        const { children } = this.props
        const h = this.tamanho.interpolate({
            inputRange:[0,100],
            outputRange:['0%','100%']
        })

        const h2 = this.tamanho.interpolate({
            inputRange:[0,100],
            outputRange:['100%','0%']
        })
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: h2, backgroundColor: '#D6384A' }} />
                    <Animated.View style={{ height: h, backgroundColor: '#2A0E12' }} />
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                    {children}
                </View>
            </View>

        )
    }
}
export default BackgroundProgress