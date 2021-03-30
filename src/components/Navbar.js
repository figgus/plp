

import React from 'react'
import { Link ,BrowserRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {CerrarSesion} from '../redux/redux';
import {useHistory} from 'react-router-dom'

export function Navbar(){
    const history = useHistory()
    const usuario = useSelector((state) => state.usuario);
    console.log(usuario)

    const dispatch = useDispatch();
    const salir = (user) => dispatch(CerrarSesion())


    const salirSesion = ()=>{
        salir()
        history.push('/')
    }
    return (
        <nav>
            <div style={{ backgroundColor: '#25a35b' }} className="nav-wrapper">
                <Link className="brand-logo left" to="/"> Plp </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/subirContenido"> Subir contenido </Link>
                    </li>
                    <li onClick={()=>{salirSesion()}}>
                        {(usuario.id>0)?(usuario.nombreUsuario):(null)}
                    </li>
                </ul>
            </div>
        </nav>
      
    )
}