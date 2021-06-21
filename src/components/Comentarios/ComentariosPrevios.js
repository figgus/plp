import { useEffect,useState } from "react";
import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function ComentariosPrevios(){
    const [comentarios,setComentarios] = useState([])



    useEffect(async()=>{
        const imagenId = localStorage.getItem('id_imagen_seleccionada')
        var respuesta = await fetch(GetUrlApi()+'/api/Comentarios/GetComentariosImagen?imagenId=' + imagenId, {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'get'
          }).catch((err)=>{
              alert('error')
              //swal({
              //    title: "Error al guardar el cierre" ,
              //    icon: "error"
              //})
          });
          if (respuesta.ok){
            const res = await respuesta.json()
            setComentarios(res)
          }
        },[]
    )


    return <div className="card-action">
        {
            comentarios.map((item, i)=>{
                return (<p>
                    {item.texto}
                </p>)
            })
        }
    </div>
}


