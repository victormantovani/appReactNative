/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import ListItem from './src/components/ListItem/ListItem'
import ListItem from './src/components/ListItem/ListItem';

// type Props = {};
export default class App extends Component {

  state = {
    placeName:'',
    places:["mantovs"]
  }

  placeNameChangedHandle = val => {
    
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ){
      return
    }

    this.setState( prevState => {
      return{
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {

    const placesOutput = this.state.places.map((place, i)  =>{
      return <ListItem 
                key={i} 
                placeName={place} 
                onItemPressed={() => {this.onItemDeleted(i)}}
              />
      
    });

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>  
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

        <View
          style={styles.listContainer}
        >
        {placesOutput}
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:"5%"
  },
  inputContainer:{
    width:"95%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  },
  listContainer:{
    width:"100%"
  }
    
});
