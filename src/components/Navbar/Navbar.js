import React, { useEffect, useState } from 'react'
import { Link ,BrowserRouter,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {CerrarSesion} from '../../redux/redux';
import {useHistory} from 'react-router-dom'
import {Login} from '../Login/Login'
import {GetUrlApi} from '../Globales/FuncionesGlobales'



export function Navbar(){
    const history = useHistory()
    const usuario = useSelector((state) => state.usuario);

    const dispatch = useDispatch();
    const salir = (user) => dispatch(CerrarSesion())

    const salirSesion = async()=>{
        salir()
        //localStorage.removeItem('nombreUsuario')
        document.cookie = "nombreUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 
        document.cookie = "idUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 

        await fetch(GetUrlApi()+'/api/usuarios/CerrarSesion', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'get',
            credentials: 'include',
          }).catch((err)=>{
              alert('error')
              //swal({
              //    title: "Error al guardar el cierre" ,
              //    icon: "error"
              //})
        })
        history.push('/')
    }

    useEffect(()=>{
        const M = window.M
        M.AutoInit()
        var elems = document.getElementById('modalLogin')
        M.Modal.init(elems, {})
        
        InitDropdowns()
        console.log('dropdown inicializado')
        
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
                            <li><a class='dropdown-trigger' href='#' data-target='dropdown1' href="javascript:void(0)">{usuario.nombreUsuario}<i class="material-icons right">arrow_drop_down</i></a></li>
                        ):(
                            <li>
                                <Link onClick={()=>{AbrirModalLogin()}}>Iniciar sesion</Link>
                            </li>
                            
                        )
                    }
                          
                          <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">Rincón del admin</a></li>
                                <li><a href="#!">Perfil</a></li>
                                <li><a href="#!">Ajustes</a></li>
                                <li><a onClick={()=>{ClickCrearGrupo()}} href="javascript:void(0)">Crear Grupo</a></li>
                                <li className="divider" tabindex="-1"></li>
                                <li><a onClick={()=>{salirSesion()}} href="#"><i className="material-icons">exit_to_app</i>Cerrar sesión</a></li>
                            </ul>
                </ul>
            </div>
            <Login />
        </nav>
      
    )
}

function AbrirModalLogin(){
    const elem = document.getElementById('modalLogin')
    var instance = M.Modal.getInstance(elem)
    instance.open()
}

function InitDropdowns(){
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
        constrainWidth: false,
        coverTrigger : false
    });
    
}
const M = window.M


function ClickCrearGrupo(){
    const elem = document.getElementById('modalCrearGrupo')
    var instance = M.Modal.getInstance(elem)
    instance.open()
}