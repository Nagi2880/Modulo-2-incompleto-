import React from 'react';
import logo from './logoerror.png'
import './LoginFile.css';
function LoginFile() {
    return(
        <div className="Error">
            <h2>Mmm... algo no salio bien</h2>
            <p id="SegundoParrafo">Debes estar autenticado para acceder a esta pagina</p>
            <img src={logo} id="Errorlogo" alt="Errorlogo" />
        </div>
    );
}
export default LoginFile