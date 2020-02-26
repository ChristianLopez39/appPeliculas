import { ipServicioPeliculas } from '../Utils/ApiPeliculas'

const obtenerPeliculas = (titulo) =>
    new Promise((resolve, reject) => {
        console.log('url', ipServicioPeliculas + contextoPeliculas  + titulo);
        fetch(ipServicioPeliculas +  '/search/shows?q=' + titulo, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => {

                if (response.status == 404) {
                    reject({
                        mensajeError: 'No se encontro la pelicula'
                    });

                }else {
                    return  response.json()
                }

            })
            .then(responseJson => {
                console.log('responseJson:::::::}}}:::::: ', JSON.stringify(responseJson) );

                resolve(responseJson)

            })
            .catch(function (error) {
                console.log('Request failed', error);
                reject({
                    mensajeError: 'error'
                });
            });
    });

    
const obtenerEpisodioPeliculas = (idEpisodio) =>
new Promise((resolve, reject) => {
    console.log('url', ipServicioPeliculas + 'shows/'  + idEpisodio );
    fetch(ipServicioPeliculas +  'shows/' + idEpisodio + '/episodes', {
        method: 'GET',
        headers:
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {

            console.log('response:: -------', response);

            if (response.status == 404) {
                reject({
                    mensajeError: 'No se encontro la pelicula'
                });

            }else {
                return  response.json()
            }

        })
        .then(responseJson => {
            console.log('responseJson::::::::::::: ', JSON.stringify(responseJson) );
            resolve(responseJson)

        })
        .catch(function (error) {
            console.log('Request failed', error);
            reject({
                mensajeError: 'Error al recuperar el episodio '
            });
        });
});


const methods = {
    obtenerPeliculas,
    obtenerEpisodioPeliculas
};

module.exports = methods;