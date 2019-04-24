import React, { Component } from 'react';
import {View, Text} from 'react-native';

const PalceInput = (props) => {
    return <View style={styles.inputContainer}>  
    <TextInput 
      style={styles.placeInput}
      placeholder="An awesome place teste"
      value={this.state.placeName}
      onChangeText={this.placeNameChangedHandle}
    />     

    <Button 
      style={styles.placeButton}
      title="Add" 
      onPress={this.placeSubmitHandler}
    />
  </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        width:"95%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    placeButton:{
        width:"30%"
    },
});