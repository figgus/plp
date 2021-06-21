import {Navbar} from '../Navbar'
import {GaleriaImagenes} from '../GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from '../SubirContenido/SubirContenido'
import {Comentarios} from '../Comentarios/Comentarios'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from '../Login/Login'
import {PanelAdmin} from '../PanelAdmin/PanelAdmin'
import {useDispatch} from 'react-redux'
import {IniciarSesion} from '../../redux/redux'
import {getCookie} from '../Globales/FuncionesGlobales'
import { useEffect } from 'react';

export function WraperApp(){
    const dispatch = useDispatch()
    
    const nombreDeUsuario = getCookie('nombreUsuario')

    useEffect(()=>{
      if(nombreDeUsuario !== 'no logeado'){
        const user = {
          id:0,
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
              <Route path='/login' component={Login} />
              {
                (nombreDeUsuario===null)?(null)
                :(
                    <Route path='/panelControl' component={PanelAdmin} />
                )
              }
              <Route path='/Comentarios' component={Comentarios} />

            </Router>
        </div>
    )
}