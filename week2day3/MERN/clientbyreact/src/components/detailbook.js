import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from "axios"

class detailbook extends React.Componenet {
    state={book:undefined}

    componenetDidUpdate(id)
    {
        // axios.get('http://localhost:5000/students/'+{ })
        // .then(res => {
        //   console.log("delete console", res);
        //   console.log(res.data);
        // })
    }
    render()
    {
        return (
            <View>
                <Text>books dealtal by condition </Text>
            </View>
        )
    }
}

export default detailbook


