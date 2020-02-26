import React from 'react';
import { View, Text } from 'react-native'
import NavigationPeliculas from './busquedaPeliculas/Navigation/NavigationPeliculas'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
          <NavigationPeliculas></NavigationPeliculas>
      </NavigationContainer>
  )
}

export default App;