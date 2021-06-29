import {GetUrlApi,getCookie,setCookie,setCookieHttpOnly} from '../Globales/FuncionesGlobales'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'; 
import{CerrarSesion, IniciarSesion} from '../../redux/redux';
import swal from 'sweetalert'
import {RegistroUsuario} from '../Login/RegistroUsuario'
import React, { useState } from 'react'
import Cookies from 'universal-cookie/es6';

export function Login(){
    const history = useHistory()
    const dispatch = useDispatch()
    const registrarLogin = (user) => dispatch(IniciarSesion(user))
    const [isRegistrar,setIsRegistrar] = useState(false)

    const Logear =async ()=>{
        var data = {}
        data.nombreUsuario = document.getElementById('nombreUsuario').value
        data.password = document.getElementById('password').value

        var respuesta = await fetch(GetUrlApi()+'/api/Usuarios/Login', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            credentials : 'include',
            body:JSON.stringify(data)
        }).catch((err)=>{
            swal({
                title: "Error" ,
                icon: "error"
            })
        });

        if (respuesta.ok) {
            const user = await respuesta.json()
            registrarLogin(user)
            const isRecordar = document.getElementById('chkRecordar').checked
            debugger
            if(isRecordar){
                setCookie('nombreUsuario',user.nombreUsuario)
                setCookie('idUsuario',user.id)
                
                setCookieHttpOnly('token',69,1)
            }
            

            history.push('/panelControl')
            CerrarSesion()
        }
    }

    const ClickRegistrar = ()=>{
        setIsRegistrar(true)
    }

    return (
        <div >
            <div className="modal" id="modalLogin">
                <div class="modal-content"> 
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">

                            {
                                (!isRegistrar)?(<React.Fragment>
                                    <h5 style={{color:'black'}}>Ingrese datos</h5>
                            
                                    <input placeholder="Nombre de usuario" id="nombreUsuario" type="text" className="validate"/>
                                        
                                    <input placeholder="Contraseña" id="password" type="password" className="validate"/>
                                        
                                    <p>
                                        <label>
                                          <input type="checkbox" className="filled-in" id="chkRecordar" />
                                          <span>Recordar</span>
                                        </label>
                                    </p>
                                    <p>
                                        <a className="Clickeable" style={{color:'Blue'}} onClick={()=>{ClickRegistrar()}}>¿No esta registrado? ¡Registrese!</a>
                                    </p>
                                    <center>
                                        <a onClick={()=>{Logear()}} className="waves-effect waves-light btn">Ingresar</a>
                                    </center>
                                </React.Fragment>):(<RegistroUsuario/>)
                            }
                            
                        </div>
                        <div className="col s4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
