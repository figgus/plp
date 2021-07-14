import {Navbar} from '../Navbar/Navbar'
import {GaleriaImagenes} from '../GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from '../SubirContenido/SubirContenido'
import {Comentarios} from '../Comentarios/Comentarios'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from '../Login/Login'
import {PanelAdmin} from '../PanelAdmin/PanelAdmin'
import {MainUsuario} from '../posteos/MainUsuario'
import {useDispatch, useSelector} from 'react-redux'
import {IniciarSesion} from '../../redux/redux'
import {getCookie,GetNombreDefault} from '../Globales/FuncionesGlobales'
import { useEffect } from 'react';
import {CrearGrupo} from '../posteos/CrearGrupo'
import {  Post} from "../posteos/Post/Post";
import { MainGrupo } from "../posteos/MainGrupo/MainGrupo";
import { CrearPost } from "../posteos/MainGrupo/CrearPost";
import React from 'react';

export function WraperApp(){
    const dispatch = useDispatch()
    const usuario = useSelector((state) => state.usuario);
    
    const nombreDeUsuario = getCookie('nombreUsuario')
    

    useEffect(()=>{
      
      if(nombreDeUsuario !== GetNombreDefault()){
        const user = {
          id:getCookie('idUsuario'),
          nombreUsuario:nombreDeUsuario
        }
        const registrarLogin = (user) => dispatch(IniciarSesion(user))
        registrarLogin(user)
        if(document.getElementById('btnDropdown')){
          document.getElementById('btnDropdown').innerHTML = user.nombreUsuario
        }
        
      }
    },[])
    
    return (
        <div>
            <Router>

              <Navbar />
              
              <Route exact path='/RinconDelAdmin' component={GaleriaImagenes} />
              <Route path='/subirContenido' component={SubirContenido} />
              <Route path='/Comentarios' component={Comentarios} />
              {
                (usuario.id===0 || !usuario.id)?(null)
                :(
                    <React.Fragment>
                        <Route path='/panelControl' component={PanelAdmin} />
                        <Route exact path='/' component={MainUsuario} />
                        <Route path='/MainGrupo' component={MainGrupo} />
                        <Route path='/CrearPost' component={CrearPost} />
                        <CrearGrupo />
                    </React.Fragment>
                    
                )
              }
              
              
              
              
            </Router>
        </div>
    )
}