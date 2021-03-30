import {Navbar} from '../Navbar'
import {GaleriaImagenes} from '../GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from '../SubirContenido/SubirContenido'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from '../Login/Login'
import {PanelAdmin} from '../PanelAdmin/PanelAdmin'
import {useSelector} from 'react-redux'


export function WraperApp(){
    const usuarioLogeado = useSelector((state) => state);
    console.log('el valor de usuario es ')
    console.log(usuarioLogeado.usuario)
    return (
        <div>
            <Router>
              <Navbar />
              <Route exact path='/' component={GaleriaImagenes} />
              <Route path='/subirContenido' component={SubirContenido} />
              <Route path='/login' component={Login} />
              {
                (usuarioLogeado.usuario.id===0)?(null)
                :(
                    <Route path='/panelControl' component={PanelAdmin} />
                )
              }

            </Router>
        </div>
    )
}