import React from 'react';



const Canciones = ({Cancionfoto, Nombre, Artista, Duracion, CantVotos, Logolike, Logodislike}) => {
    return(
        <tr>
            <td><img src={Cancionfoto} /></td>
            <td>{Nombre}</td>
            <td>{Artista}</td>
            <td>{Duracion}</td>
            <td>{CantVotos}</td>
            <td><img src={Logolike} />
                <img src={Logodislike} />
            </td>
            
            
        </tr>
        );
}

export default Canciones