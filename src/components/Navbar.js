

import React from 'react'
import { Link ,BrowserRouter,NavLink} from 'react-router-dom'


export function Navbar(){
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    return (
        <nav>
            <div style={{ backgroundColor: '#25a35b' }} className="nav-wrapper">
                <Link className="brand-logo left" to="/"> Plp </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/subirContenido"> Subir contenido </Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    )
}