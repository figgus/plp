import swal from 'sweetalert'
import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function RegistroUsuario(){

    const CrearUsuario = async()=>{
        const email = document.getElementById('email').value
        const nombreUsuario = document.getElementById('username').value
        const password = document.getElementById('pass').value

        if(email=== '' || nombreUsuario==='' || password===''){
            alert('los campos no pueden estar en blanco')
            return
        }

        var data = {}
        data.nombreUsuario = nombreUsuario
        data.password = password
        data.email = email

        var respuesta = await fetch(GetUrlApi()+'/api/Usuarios/', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            body:JSON.stringify(data) 
        }).catch((err)=>{
            swal({
                title: "Error al guardar el usuario" ,
                icon: "error"
            })
        });

        if (respuesta.ok) {
            const user = await respuesta.json()
            swal('Usuario creado con excito')
        }
    }

    return (<div>
        <h5 style={{color:'black'}}>Registro de usuario</h5>
            <form >
                <input placeholder="Correo electronico" id="email" type="text" />
                
                <input placeholder="Nombre de usuario" id="username" type="text" />
    
                <input placeholder="Contraseña" id="pass" type="password" />
            </form>
            
                
            
            <center>
                <a onClick={()=>{CrearUsuario()}} className="waves-effect waves-light btn">Registrar</a>
            </center>
    </div>)
}