import React, { Fragment, userState, useState } from 'react';
import './Logeate.css';
import errorlogo from './logoerror.png';


function Logeate(){ 

      return(
     
    <main className="Login">
        <img src={errorlogo} alt="errorlogo" id="errorlogo" />
        <h3>Ingresar</h3>
        <form className="FormularioLogin">
            <input 
            name="correo"
            type="email" 
            id="CorreoElectronico" 
            placeholder="Correo Electronico"
            />
            <input 
            type="password" 
            id="Contraseña" 
            placeholder="Contraseña"
            name="contrasena" 
            
            />
            <button id="Start"> <>COMENZAR A CREAR PLAYLISTS</></button> 
            <button id="Olvidado"> ¿HAS OLVIDADO LA CONTRASEÑA? </button>
        </form>
        <hr id="LineaIngresar" />
        <p id="Cuenta">¿NO TIENES CUENTA?</p>
        <button id="Registrate">REGISTRATE</button>
    </main>
    

);


}
export default Logeate