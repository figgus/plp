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
                        <div className="col s12 m7 Clickeable">
                            <div className="card horizontal">
                              <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6"/>
                              </div>
                              <div className="card-stacked">
                                <div className="card-content">
                                  <h5>{item.titulo}</h5>
                                  <p>
                                    publicado hace {item.horasDesdeCreacion} horas
                                  </p>
                                  <p>
                                    {String(item.texto).substring(0,150) } {(String(item.texto).length>150)?('...'):('')}
                                  </p>
                                </div>
                                <div className="card-action">
                                  <a href="#">   <i className="material-icons">message</i>  69 comentarios</a>
                                </div>
                              </div>
                            </div>
                        </div>
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