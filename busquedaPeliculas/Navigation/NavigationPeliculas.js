import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import InicioBusqueda from '../Screens/InicioBusqueda'
import InformacionPeliculaScreen from '../Screens/InformacionPeliculaScreen'

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="BusquedaPeliculasScreen" component={InicioBusqueda} options={{
                title: 'TVMAZE',
                headerStyle: {
                    backgroundColor: '#3EC2A2',
                },
            }} />
            <Stack.Screen name='InformacionPeliculaScreen' component={InformacionPeliculaScreen} options={{title: 'Información Peliculas'}} />
        </Stack.Navigator>
    );
}

export default MyStack;