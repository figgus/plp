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
        document.cookie = "nombreUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 
        document.cookie = "idUsuario = John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; 
        document.getElementById('btnDropdown').innerHTML = ''
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
        
    },[])


    //return (
    //    <nav>
    //        <div style={{ backgroundColor: '#25a35b' }} className="nav-wrapper">
    //            <Link className="brand-logo left" to="/"> Plp </Link>
    //            <ul id="nav-mobile" className="right hide-on-med-and-down">
    //                
    //                <li>
    //                    <Link to="/subirContenido"> Subir contenido </Link>
    //                </li>
    //                <li>
    //                    <Link to="/Inicio"> Posteorama </Link>
    //                </li>
    //                {
    //                    (Number(usuario.id)!==0 )?(
    //                        <li><a className='dropdown-trigger' href='#' data-target='dropdown1' href="#">{usuario.nombreUsuario}<i class="material-icons right">arrow_drop_down</i></a></li>
    //                    ):(
    //                        <li>
    //                            <Link onClick={()=>{AbrirModalLogin()}}>Iniciar sesion</Link>
    //                        </li>
    //                        
    //                    )
    //                }
    //                      <li>
    //                            <ul id='dropdown1' className='dropdown-content browser-default'>
    //                                  <li><a href="#!">Rincón del admin</a></li>
    //                                  <li><a href="#!">Perfil</a></li>
    //                                  <li><a href="#!">Ajustes</a></li>
    //                                  <li><a onClick={()=>{ClickCrearGrupo()}} href="javascript:void(0)">Crear Grupo</a></li>
    //                                  <li className="divider" tabindex="-1"></li>
    //                                  <li><a onClick={()=>{salirSesion()}} href="#"><i className="material-icons">exit_to_app</i>Cerrar sesión</a></li>
    //                              </ul>
    //                            </li>
    //                      
    //            </ul>
    //        </div>
    //        <Login />
    //    </nav>
    //  
    //)

    const CrearGrupo = ()=>{
        const elem = document.getElementById('modalCrearGrupo')
        var instance = M.Modal.getInstance(elem)
        instance.open()
    }
    return (<React.Fragment>
        <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">Rincon del admin</a></li>
            <li><a onClick={()=>{CrearGrupo()}} href="javascript:void(0)" href="#!">Crear Grupo</a></li>
            <li><a href="javascript:void(0)" href="#!">Perfil</a></li>
            <li><a href="javascript:void(0)" href="#!">Ajustes</a></li>
            <li class="divider"></li>
            <li><a onClick={()=>{salirSesion()}} href="javascript:void(0)">Cerrar sesion</a></li>
        </ul>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li> <Link onClick={()=>{AbrirModalLogin()}}>Iniciar sesion</Link> </li>
              <li><a id="btnDropdown" className="dropdown-trigger" href="#!" data-target="dropdown1">-<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
        <Login />
    </React.Fragment>)
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
