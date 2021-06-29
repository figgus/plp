import {Navbar} from '../Navbar'
import {GaleriaImagenes} from '../GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from '../SubirContenido/SubirContenido'
import {Comentarios} from '../Comentarios/Comentarios'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from '../Login/Login'
import {PanelAdmin} from '../PanelAdmin/PanelAdmin'
import {MainUsuario} from '../posteos/MainUsuario'
import {useDispatch} from 'react-redux'
import {IniciarSesion} from '../../redux/redux'
import {getCookie,GetNombreDefault} from '../Globales/FuncionesGlobales'
import { useEffect } from 'react';

export function WraperApp(){
    const dispatch = useDispatch()
    
    const nombreDeUsuario = getCookie('nombreUsuario')

    useEffect(()=>{
      if(nombreDeUsuario !== GetNombreDefault()){
        const user = {
          id:getCookie('idUsuario'),
          nombreUsuario:nombreDeUsuario
        }
        const registrarLogin = (user) => dispatch(IniciarSesion(user))
        registrarLogin(user)
      }
    },[])
    
    return (
        <div>
            <Router>
              <Navbar />
              <Route exact path='/' component={GaleriaImagenes} />
              <Route path='/subirContenido' component={SubirContenido} />
              {
                (nombreDeUsuario===null)?(null)
                :(
                    <Route path='/panelControl' component={PanelAdmin} />
                )
              }
              <Route path='/Comentarios' component={Comentarios} />
              <Route path='/Inicio' component={MainUsuario} />

            </Router>
        </div>
    )
}