import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from "./Pages/HomePage"
import Header from './Pages/Header'
import Navbar from './Pages/navbar'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MyButton from './Pages/SideButton'

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
          <Header />
          <HomePage />
          <MyButton/>
          <Navbar />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({

})