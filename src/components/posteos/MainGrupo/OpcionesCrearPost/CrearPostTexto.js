import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { GetUrlApi } from "../../../Globales/FuncionesGlobales";


export function CrearPostTexto(){
    const usuario = useSelector((state) => state.usuario);
    const grupo = useSelector((state) => state.parametros.grupo);
    const url = useHistory()
    const CrearPost = async ()=>{
        var data = {}
        debugger
        data.titulo = document.getElementById('txtTitulo').value
        data.texto = document.getElementById('txtTexto').value
        data.usuarioID = Number(usuario.id) 
        data.grupoID = grupo.id

        var respuesta = await fetch(GetUrlApi()+'/api/Post', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            credentials: 'include',
            body : JSON.stringify(data) 
          }).catch((err)=>{
              swal({
                  title: "Error al crear el post" ,
                  icon: "error"
              })
          });
          if(!respuesta){
            swal({
                title: "Error al crear el post" ,
                icon: "error"
            })
            return
          }
          if (respuesta.ok){
            await swal({
                title: "Post creado con exito" ,
                icon: "success"
            })
            url.push('/MainGrupo')
          }
    }

    return (<div className="row">
        <div className="col s2"></div>
        <div className="col s8">
            <br/>
            <div className="input-field">
                <input id="txtTitulo" type="text" className="validate"/>
                <label for="txtTitulo">Titulo</label>
                <span className="helper-text" data-error="wrong" data-success="right">Maximo 100 caracteres</span>
            </div>
            <br/>
            
            <div className="input-field">
                <input id="txtTexto" type="text" className="validate"/>
                <label for="txtTexto">Texto</label>
                <span className="helper-text" data-error="wrong" data-success="right">Opcional</span>
            </div>

            <br/>
            <a onClick={()=>{CrearPost()}} style={{float: 'right'}} className="waves-effect waves-light btn"><i class="material-icons right">publish</i>Publicar</a>
        </div>
        <div className="col s2"></div>
        
    </div>)
}
