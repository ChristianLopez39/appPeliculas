import React, { useState, useEffect } from 'react'
import { View, Text, Alert, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import { SearchBar, Input, Button } from 'react-native-elements';
import { obtenerPeliculas } from '../Services/ServiceBusqueda'
import stylesInicioBusqueda from '../Resources/Styles/StylesInicioBusqueda'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const InicioBusqueda = ({ navigation }) => {

    const [titulo, setSearh] = useState('');
    const [listaNombre, setListaNombre] = useState([])


    const buscarPelicula = titulo => {
        console.log("buscarPelicula")
        setSearh({ titulo });
        obtenerPeliculas(titulo).then(
            (resp) => {

                var arrayTemp = [];

                for (var x = 0; x < resp.length; x++) {
                    console.log("id::::::::: " + resp[x].show.id)
                    console.log("res::::::::: " + resp[x].show.name)

                    //SE VALIDA LA IMAGEN EN CASO DE NO TRAER IMAGEN SE ASIGNA UNA DEFAULT
                    if (resp[x].show.image == null) {
                        arrayTemp.push({
                            nombre: resp[x].show.name,
                            imagen: 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
                            id: resp[x].show.id
                        });
                        console.log("Imagen Null")
                    } else {
                        //EN CASO DE TENER LA IMAGEN SE AGREGAN SUS VALORES CORRESPONDIENTES
                        console.log("imagen::::::: " + resp[x].show.image.original)
                        arrayTemp.push({
                            nombre: resp[x].show.name,
                            imagen: resp[x].show.image.original,
                            id: resp[x].show.id
                        });
                    }
                }

                //Se agregan elementos del arreglo
                setListaNombre(arrayTemp);
                console.log("listaNombre::::::: " + JSON.stringify(listaNombre))

            }
        ).catch(
            (err) => {
                console.log("err::: " + err)
                Alert.alert(err.mensajeError)
            }

        )
    }

    const infoPelicula = (item) => {
        console.log("cambio de pagina")
        console.log("nombre" + item.nombre)
        console.log("id" + item.id)


        navigation.navigate('InformacionPeliculaScreen', {
            nombre: item.nombre,
            idPelicula: item.id,
            imagen : item.imagen
        });
    }

    function Item({ item }) {

        return (
            <TouchableOpacity style={stylesInicioBusqueda.listaVista} onPress={() => infoPelicula(item)}>
                <Image
                    style={stylesInicioBusqueda.imagen}
                    source={{ uri: item.imagen }}
                />
                <View style= {{width: wp(30)}}>
                    <Text style={stylesInicioBusqueda.listaPeliculas}>{item.nombre}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ImageBackground source={require('../Resources/Imagenes/fondo.jpg')} style={{ width: '100%', height: '100%' }}>
            
            <SearchBar
                placeholder="Buscar..."
                onChangeText={buscarPelicula}
                value={titulo}
            />

            <FlatList
                data={listaNombre}
                numColumns={3}
                renderItem={({ item }) => (
                    <Item
                        id={item.idPelicula}
                        item={item}

                    />
                )}
                keyExtractor={item => item.idPelicula}
            />

        </ImageBackground>
    )
}

export default InicioBusqueda;