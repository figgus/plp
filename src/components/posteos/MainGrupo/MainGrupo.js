import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { GetUrlApi } from "../../Globales/FuncionesGlobales";

export function MainGrupo(){
    const parametros = useSelector((state) => state.parametros);
    const redirigir = useHistory() 
    const [posts,setPosts] = useState([])

    useEffect(async()=>{
        setPosts(await TraerPostAsociados(parametros.grupo.id))
    },[])


    return (<div className="container">
        <center>
            <br/>
            <a onClick={()=>{redirigir.push('/CrearPost')}} className="waves-effect waves-light btn-large"><i class="material-icons left">add</i>Crear publicacion</a>
        </center>
        
        <ul class="collection">
          
          {
              posts.map((item,i)=>{
                  return (
                    <li className="collection-item">
                        <h5>
                            {item.titulo}
                        </h5>
                        
                        <br/>
                        {item.texto}
                    </li>
                  )
              })
          }
        </ul>
            

        aaselecciono el id {parametros.grupo.id}
    </div>)
}


async function TraerPostAsociados(idGrupo){
    var respuesta = await fetch(GetUrlApi()+'/api/Post/GetPostByGroup?id='+idGrupo, {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'get',
        credentials: 'include'
      }).catch((err)=>{
          swal({
              title: "Error al traer los post" ,
              icon: "error"
          })
      });
      if(!respuesta){
        swal({
            title: "Error al traer los post" ,
            icon: "error"
        })
        return
      }
      if (respuesta.ok){
        const res = await respuesta.json()
        return res
      }
}