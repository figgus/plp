import {GetUrlApi,getCookie,setCookie} from '../Globales/FuncionesGlobales'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'; 
import{CerrarSesion, IniciarSesion} from '../../redux/redux';
import swal from 'sweetalert'

export function Login(){
    const history = useHistory()
    const dispatch = useDispatch()
    const registrarLogin = (user) => dispatch(IniciarSesion(user))

    const Logear =async ()=>{
        var data = {}
        data.nombreUsuario = document.getElementById('nombreUsuario').value
        data.password = document.getElementById('password').value

        var respuesta = await fetch(GetUrlApi()+'/api/Usuarios/Login', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            body:JSON.stringify(data)
        }).catch((err)=>{
            swal({
                title: "Error al guardar el cierre" ,
                icon: "error"
            })
        });

        if (respuesta.ok) {
            const user = await respuesta.json()
            registrarLogin(user)
            setCookie('nombreUsuario',user.nombreUsuario)
            setCookie('idUsuario',user.id)

            history.push('/panelControl')
            CerrarSesion()
        }
    }

    return (
        <div >
            <div className="modal" id="modalLogin">
                <div class="modal-content"> 
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">
                            <h5 style={{color:'black'}}>Ingrese datos</h5>
                            
                            <input placeholder="Nombre de usuario" id="nombreUsuario" type="text" className="validate"/>

                            <input placeholder="Contraseña" id="password" type="password" className="validate"/>

                            <p>
                                <label>
                                  <input type="checkbox" className="filled-in"  />
                                  <span>Recordar</span>
                                </label>
                            </p>
                            <center>
                                <a onClick={()=>{Logear()}} className="waves-effect waves-light btn">Ingresar</a>
                            </center>
                        </div>
                        <div className="col s4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function CerrarModalLogin(){
    const M = window.M
    const elem = document.getElementById('modalLogin')
    var instance = M.Modal.getInstance(elem);
    instance.close()
}