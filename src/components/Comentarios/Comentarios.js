import { useEffect,useState } from "react"
import {GetUrlApi} from '../Globales/FuncionesGlobales'
import {ComentariosPrevios} from '../Comentarios/ComentariosPrevios'

export function Comentarios(){
    const titulo = localStorage.getItem('titulo')
    const url = localStorage.getItem('url_imagen')
    const [mostrarComentarios,setMostrarComentarios] = useState(true)
    
    const CrearComentario = async ()=>{
        setMostrarComentarios(false)
        var body = {}
        body.texto = document.getElementById('txtTexto').value
        body.visible = true
        body.contenidoID =Number(localStorage.getItem('id_imagen_seleccionada'))

        var respuesta = await fetch(GetUrlApi()+'/api/Comentarios/', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
          }).catch((err)=>{
              alert('error')
              //swal({
              //    title: "Error al guardar el cierre" ,
              //    icon: "error"
              //})
          })
          if (respuesta.ok){
            setMostrarComentarios(true)
            document.getElementById('txtTexto').value = ''
          }
    }

    return (
        <div  className="container">
            <div className="row">
                <div className="col s12 m7">
                      <div className="card">
                        <div className="card-image">
                          <img src={'https://localhost:44374/api/contenidos/getImage?nombreImagen='+ url}/>
                          <span className="card-title">{titulo}</span>
                        </div>
                    <div className="card-content">
                        <h4>Dejar un comentario</h4>
                        <p>
                            <textarea id="txtTexto" className="materialize-textarea">

                            </textarea>
                            <center>
                                <a onClick={()=>{CrearComentario()}} style={{ backgroundColor: '#25a35b' }} className="waves-effect waves-light btn"><i className="material-icons right">add</i>Publicar</a>
                            </center>
                        </p>
                    </div>
                    {
                        (mostrarComentarios)?(<ComentariosPrevios />):(null)
                    }
                        
                      
                  </div>
                </div>
            </div>
        </div>
    )
}
