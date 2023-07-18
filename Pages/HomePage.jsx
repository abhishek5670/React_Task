import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Data } from './Data/DummyData.jsx';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => {
  const [showMainBox, setShowMainBox] = useState(false);
  const [showNestedBox, setShowNestedBox] = useState(false);

  const handleMainBoxPress = () => {
    setShowMainBox(!showMainBox);
  };

  const handleNestedBoxPress = () => {
    setShowNestedBox(!showNestedBox);
  };
  return (
    <ScrollView style={styles.root}>
    <View style={styles.main}>


      {Data.map((Value) => {
        return (
          <View style={styles.Container}>
            <View index={Value.uid}>
              <Text variant='titleLarge' style={{color:'black',}} >{Value.name}</Text>
              <View style={styles.body} >
                <View style={styles.Word}>
                  <Text style={[styles.Lower,{color:'black'}]} variant="bodyMedium">Gold</Text>
                  <Text style={[styles.Lower,{color:'green'}]} variant="bodyMedium" >{Value.gold}</Text>
                </View>

                <View style={styles.Word}>
                  <Text style={[styles.Lower,{color:'black'}]} variant="bodyMedium">Silver</Text>
                  <Text style={[styles.Lower,{color: 'red'}]} variant="bodyMedium">{Value.Silver}</Text>
                </View>
                <View style={styles.Word}>
                  <Text style={[styles.Lower,{color:'black'}]} variant="bodyMedium">Both</Text>
                  <Text style={[styles.Lower,{color: 'green'}]} variant="bodyMedium">{Value.both}</Text>
                </View>

              </View>
            </View>
          </View>)
      })}
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    // padding:20,
    height: '45%',
    backgroundColor: '#F1F2FF'
  },
  main: {
    backgroundColor: '#F1F2FF',
    // height: '65%',
    width: '100%',
    alignItems: 'center'
  },
  Container: {
    flexDirection: 'column',
    width: '98%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  }
  ,
  body: {
    // flex:8,
    height: 40,
    width: '98%',
    flexDirection: 'row',

    margin: 3,
    alignItems: 'center'
  },
  Word: {
    flexDirection: 'column'

  },
  Lower: {
    fontSize: 20,
    width: '',
    marginLeft: 50,
    color: 'green',
  },
})

export default MyComponent;