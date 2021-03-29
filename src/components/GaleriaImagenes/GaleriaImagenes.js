import React,{useEffect,useState} from 'react'
import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function GaleriaImagenes(){
  const [imagenes,setImagenes] = useState([]);

  useEffect(async()=>{
    var respuesta = await fetch(GetUrlApi()+'/api/Contenidos/GetContenidoAprovado', {
      headers:{
          'Content-Type': 'application/json'
      },
      method: 'get'
    }).catch((err)=>{
        console.log(err);
        alert('error')
        //swal({
        //    title: "Error al guardar el cierre" ,
        //    icon: "error"
        //})
    });
    if (respuesta.ok){
      const res = await respuesta.json()
      setImagenes(res)
      console.log(res)
    }
  },[])
  


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
                  <a href="#">Comentarios</a>
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