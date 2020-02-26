import React, { useState, useEffect } from 'react'
import { View, Text, Alert, ImageBackground, FlatList, TouchableOpacity, Image, Linking } from 'react-native'
import stylesInicioBusqueda from '../Resources/Styles/StylesInicioBusqueda'

import { obtenerEpisodioPeliculas } from '../Services/ServiceBusqueda'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const InformacionPeliculaScreen = ({ route }) => {

    const [detallePelicula, setDetallePelicula] = useState([])
    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')


    useEffect(() => {

        //SE OBTIENEN DATOS DE LA PAGINA ANTERIOS
        const { nombre } = route.params;
        const { idPelicula } = route.params;
        const {imagen } = route.params

        setNombre(nombre)
        setImagen(imagen);

        obtenerEpisodioPeliculas(idPelicula, nombre).then((resp) => {
            console.log("obtenerEpisodioPeliculas::: " + JSON.stringify(obtenerEpisodioPeliculas));
            setDetallePelicula(resp)
            console.log("setDetallePelicula" + JSON.stringify(setDetallePelicula));
        }).catch((err) => {
            console.log("obtenerEpisodioPeliculas[[[[[[ " + JSON.stringify(err));
        })
    },[1]);

    function Item({ item }) {

        return (
            <View style={stylesInicioBusqueda.listaVistaDetalle}>
                <Image
                    style={stylesInicioBusqueda.imagen}
                    source={{ uri: item.image == null ? 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png' : item.image.medium }}
                />
                <View >
                    <Text style={stylesInicioBusqueda.listaPeliculas}>Episodio: {''} {item.name}  </Text>
                    <Text style={stylesInicioBusqueda.listaPeliculas}>Temporada:   {item.season}  </Text>
                    <Text style={stylesInicioBusqueda.listaPeliculas}>Dia:  {''}  {item.airdate}  {''}  Hora: {item.airtime} </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <Text style={stylesInicioBusqueda.listaPeliculas}> {'>>'} Ver Episodio {'<<'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <ImageBackground source={require('../Resources/Imagenes/fondo.jpg')} style={{ width: '100%', height: '100%' }}>
            <View >
                <View style={stylesInicioBusqueda.vistaDescripcion} >
                    <Image
                        style={stylesInicioBusqueda.imagen}
                        source={{ uri:  imagen}}
                    />
                    <Text style = {stylesInicioBusqueda.textoPelicula}>Nombre: {nombre} </Text>
                </View>

                <View>
                    <Text style={stylesInicioBusqueda.textoEpisodios}>  Episodios</Text>
                </View>
                <FlatList
                    data={detallePelicula}
                    //numColumns={3}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            item={item}

                        />
                    )}
                    keyExtractor={item => item.idPelicula}
                />
            </View>
        </ImageBackground>
    )

}

export default InformacionPeliculaScreen;