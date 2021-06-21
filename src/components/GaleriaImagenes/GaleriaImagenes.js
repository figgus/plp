import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function GaleriaImagenes(){
  const [imagenes,setImagenes] = useState([])
  const history = useHistory()

  useEffect(async()=>{
    var respuesta = await fetch(GetUrlApi()+'/api/Contenidos/GetContenidoAprovado', {
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
      setImagenes(res)
    }
  },[])

  const ClickComentarios = (indiceImagen)=>{
    const id_imagen_seleccionada = imagenes[indiceImagen].id
    localStorage.setItem('id_imagen_seleccionada',id_imagen_seleccionada)
    localStorage.setItem('url_imagen',imagenes[indiceImagen].urlFile)
    localStorage.setItem('titulo',imagenes[indiceImagen].titulo)

    history.push("/Comentarios")
  }
  


  return (
      <div  className="container">
        <div class="row">
          {
            imagenes.map((item,index)=>{
              return (
                <div class="col s12 m7">
                  <div class="card">
                    <div class="card-image">
                      <img src={'https://localhost:44374/api/contenidos/getImage?nombreImagen='+item.urlFile}/>
                      <span class="card-title">{item.titulo}</span>
                    </div>
                <div class="card-content">
                  <p>{item.descripcion}</p>
                </div>
                <div class="card-action">
                  <a href="#">Like</a>
                  <a onClick={()=>{ClickComentarios(index)}} href="javascript:void(0)">Comentarios</a>
                </div>
              </div>
              </div>
              )
            })
          }
          
        </div>
        
      </div>
  )
}