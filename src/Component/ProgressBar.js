import React from 'react'
import { View } from 'react-native'

const ProgressBar = props => {
    const { color, porcentege, height } = props
   
    return (
        <View>
            <View style={{
                width: porcentege ? porcentege+'%' : '1%',
                backgroundColor: color ? color : 'white',
                height: height ? height : 3
            }}></View>
        </View> 
    )
}

export default ProgressBar