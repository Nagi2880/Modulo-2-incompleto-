import React from 'react';
import './Playlistcomponents.css';
import Canciones from './canciones';
import cancion1 from './cancion1.png';
import cancion2 from './cancion2.png';
import cancion3 from './cancion3.png';
import logolike from './Like-logo.png';
import logodislike from './dislikelogo.png';

function Playlistcomponents (){
    return(
        <div className="Contenedor-play-list">
            <input type="search" id="buscador" name="Buscar " placeholder="Buscar"  />
            <div className="Resultados">
                <p id="Resultados-texto">Resultados</p>
                 <table className="Tabla-Resultados">
                     <hr id="Linea-tabla" />
                     <tr>
                        <td>Nombre</td>
                        <td>Artista</td>
                        <td>Album</td>
                        <td>Duracion</td>
                        <td>Agregar</td>
                    </tr>
                 </table>
            </div>
            <div className="TuPlaylist">
                <p id="TuPlaylist-texto">Tu Playlist</p>
                <table className="Tabla-Playlist">
                        <hr id="Linea-Playlist" />
                        <tr>    
                            <td>Nombre</td>
                            <td>Artista</td>
                            <td>Duracion</td>
                            <td>Cant. Votos</td>
                            <td>Votar</td>
                        </tr>
                        <Canciones 
                        Cancionfoto={cancion1}
                        Nombre="A las nueve"
                        Artista="Maldicion"
                        Duracion="3:24"
                        CantVotos="4"
                        Logolike={logolike}
                        Logodislike={logodislike} />
                        
                        <Canciones 
                        Cancionfoto={cancion2}
                        Nombre="A las nueve"
                        Artista="Maldicion"
                        Duracion="3:24"
                        CantVotos="4"
                        Logolike={logolike}
                        Logodislike={logodislike} />
                        
                        <Canciones 
                        Cancionfoto={cancion3}
                        Nombre="A las nueve"
                        Artista="Maldicion"
                        Duracion="3:24"
                        CantVotos="4"
                        Logolike={logolike}
                        Logodislike={logodislike} />
                </table>
            </div>
        </div>
    );
}
export default Playlistcomponents