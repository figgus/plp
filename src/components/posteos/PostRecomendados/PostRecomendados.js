import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { GetUrlApi ,getCookie} from "../../Globales/FuncionesGlobales";

export function PostRecomendados(){
    const usuario = useSelector((state) => state.usuario);
    const [posts,setPosts] = useState([])
    useEffect(async()=>{
        
        const userID_cookie = getCookie('idUsuario')

        if(!userID_cookie){
            setPosts(await TraerPostRecomendados(usuario.id))
        }
        else{
            setPosts(await TraerPostRecomendados(userID_cookie))
        }

        
    },[])



    return (<div>
        {
              (posts)?(
                posts.map((item,i)=>{
                    return (
                      <li className="collection-item">
                          <h5>
                              {item.titulo}
                          </h5>
                          publicado hace {item.horasDesdeCreacion} horas
                          <br/>
                          {item.texto}
                      </li>
                    )
                })
              ):(<p>posts nulo</p>)
              
          }
    </div>)
}

async function TraerPostRecomendados(UserID){
    if(Number(UserID)===0){
        alert('el id es 0')
    }
    
    const url = GetUrlApi()+'/api/Post/GetPostRecomendados?UserID='+UserID
    
    var respuesta = await fetch(url, {
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
            title: "Error al traer los post recomendados" ,
            icon: "error"
        })
        return
      }
      if (respuesta.ok){
        const res = await respuesta.json()
        return res
      }
}