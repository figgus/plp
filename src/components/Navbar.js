

import React from 'react'
import { Link ,BrowserRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';

export function Navbar(){
    const usuario = useSelector((state) => state.usuario);
    console.log(usuario)
    return (
        <nav>
            <div style={{ backgroundColor: '#25a35b' }} className="nav-wrapper">
                <Link className="brand-logo left" to="/"> Plp </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/subirContenido"> Subir contenido </Link>
                    </li>
                    <li>
                        {usuario.nombreUsuario}
                    </li>
                </ul>
            </div>
        </nav>
      
    )
}