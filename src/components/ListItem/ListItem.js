import React from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'

const listItem = (props) => {
    return
        // <TouchableNativeFeedback onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
        // </TouchableNativeFeedback>
}

const styles = StyleSheet.create({
    listItem:{
        width:"100%",
        margin: 5,
        padding:10,
        backgroundColor:"#eee"
    }
})

export default listItem;