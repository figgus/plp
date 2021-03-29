import {GetUrlApi} from '../Globales/FuncionesGlobales'
import {useHistory} from 'react-router-dom'

export function Login(){
    const history = useHistory()

    return (
        <div >
            <div class="row">
                <div class="col s4"></div>
                <div class="col s4">
                    <h5>Ingrese datos</h5>
                    <br/>
                    <label>Nombre de usuario</label>
                    <input id="nombreUsuario" type="text" class="validate"/>

                    <label >Password</label>
                    <input id="password" type="password" class="validate"/>
                    
                    <br/>
                    <center>
                        <a onClick={()=>{Logear(history)}} className="waves-effect waves-light btn">Ingresar</a>
                    </center>
                    
                </div>
                <div class="col s4"></div>
            </div>

        </div>
    )
}

async function Logear(redirect){
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
        console.log(err);
        alert('error')
        //swal({
        //    title: "Error al guardar el cierre" ,
        //    icon: "error"
        //})
    });
    if (respuesta.ok) {
        redirect.push('/panelControl')
    }

}