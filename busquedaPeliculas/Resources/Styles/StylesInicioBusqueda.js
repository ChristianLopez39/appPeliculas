import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {

    listaPeliculas: {
        fontSize:  hp('2%'),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    textoEpisodios: {
        fontSize:  hp('4%'),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'left',
    },

    textoPelicula: {
        fontSize:  hp('2%'),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    listaVista: {
        backgroundColor: '#3EC2A2',
        //padding: 20,
        marginVertical: hp("2%"),
        marginHorizontal:hp("1%"),
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: wp(30)
    },

    vistaDescripcion: {
       // backgroundColor: '#BEFFB2',
        //padding: 20,
        marginVertical: hp("2%"),
        marginHorizontal:hp("1%"),
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: wp(96),
        height: hp('29%')
    },

    listaVistaDetalle: {
        backgroundColor: '#3EC2A2',
        //padding: 20,
        marginVertical: hp("2%"),
        marginHorizontal:hp("1%"),
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: wp(96),
        height: hp('37%')
    },

    imagen: {
        width: 100, 
        height: 170
    },

}