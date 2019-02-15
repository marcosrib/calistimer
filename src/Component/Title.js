import React from 'react'
import {View,Text} from 'react-native'
const Title = props => {
    return (
        <View style={{paddingBottom:20,paddingTop:20}} style={props.style}>
            <Text style={{ fontFamily: 'Ububtu-Bold', fontSize: 40, color: 'white', textAlign:'center' }}>{props.title}</Text>
            <Text style={{ fontFamily: 'Ububtu-Regular', fontSize: 14, color: 'white' ,textAlign:'center'}}>{props.subTitle}</Text>
        </View>
    )
}

export default Title