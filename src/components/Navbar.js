import React, { useEffect, useState } from 'react'
import { Link ,BrowserRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {CerrarSesion} from '../redux/redux';
import {useHistory} from 'react-router-dom'
import {Login} from './Login/Login'

export function Navbar(){
    const history = useHistory()
    const usuario = useSelector((state) => state.usuario);

    const dispatch = useDispatch();
    const salir = (user) => dispatch(CerrarSesion())

    const salirSesion = ()=>{
        salir()
        localStorage.removeItem('nombreUsuario')
        document.cookie = "nombreUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 
        document.cookie = "idUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 
        document.cookie = "jwt = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 

        history.push('/')
    }

    useEffect(()=>{
        const M = window.M
        var elems = document.getElementById('modalLogin');
        M.Modal.init(elems, {});
    },[])


    return (
        <nav>
            <div style={{ backgroundColor: '#25a35b' }} className="nav-wrapper">
                <Link className="brand-logo left" to="/"> Plp </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/subirContenido"> Subir contenido </Link>
                    </li>
                    <li>
                        <Link to="/Inicio"> Posteorama </Link>
                    </li>
                    {
                        (Number(usuario.id)!==0 )?(
                            <React.Fragment>
                                <li className="Clickeable">
                                    <Link>{usuario.nombreUsuario}</Link>
                                </li>
                                <li>
                                    <Link onClick={()=>{salirSesion()}}>Cerrar sesión</Link>
                                </li>
                            </React.Fragment>
                        ):(
                            <li>
                                <Link onClick={()=>{AbrirModalLogin()}}>Iniciar sesión</Link>
                            </li>
                            
                        )
                    }
                    <li>
                                <Link onClick={()=>{AbrirModalLogin()}}>Iniciar sesión</Link>
                            </li>
                </ul>
            </div>
            <Login />
        </nav>
      
    )
}

function AbrirModalLogin(){
    const M = window.M
    const elem = document.getElementById('modalLogin')
    var instance = M.Modal.getInstance(elem);
    instance.open()
}

