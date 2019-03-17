import React from 'react'
import { View, Text, CheckBox } from 'react-native'
var tempCheckValues = [];
class teste extends React.Component {
    state = {
        products: [{
            nome: "marcos",
            status: false
        },
        {
            nome: "joao",
            status: false
        },
        {
            nome: "jose",
            status: false
        }]
    }

    checkBoxChanged(i, val) {
        console.warn(val);
        

        let newState = Object.assign({}, this.state);
        newState.products[i].status = !val
        console.warn(newState);

        this.setState(newState);

    }
    render() {


        return (
            this.state.products.map((val, index) => {
                return (
                    <View key={val.nome} style={{ flexDirection: "row" }}>
                        <CheckBox
                            value={val.status}
                            onValueChange={() => this.checkBoxChanged(index, val.status)}
                        >
                        </CheckBox>
                        <Text>{val.nome}</Text>
                    </View>
                )
            }
            )
        )

    }


}
export default teste;