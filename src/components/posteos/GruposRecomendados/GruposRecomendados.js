import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { GetUrlApi } from "../../Globales/FuncionesGlobales";
import { ActualizarGruposUsuarios } from "../../../redux/redux";

export function GruposRecomendados(){
    const [gruposRecomendados,setGruposRecomendados] = useState([]);
    const usuario = useSelector((state) => state.usuario);

    const dispatch = useDispatch()
    //const updateGruposUser = (gruposUsuario) => dispatch(ActualizarGruposUsuarios(gruposUsuario))

    useEffect(()=>{
        TraerGruposRecomendados()
    },[])

    const TraerGruposRecomendados=async()=>{
        var respuesta = await fetch(GetUrlApi()+'/api/Grupos', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'get',
            credentials: 'include'
        }).catch((err)=>{
            swal({
                title: "Error al traer los grupos" ,
                icon: "error"
            })
            return
        });
        if(!respuesta){
            swal({
                title: "Error al traer los grupos, compruebe su conexion a internet" ,
                icon: "error"
            })
            return
        }
        if (respuesta.ok) {
            const res = await respuesta.json()
            setGruposRecomendados(res)
        }
    }

    const Unirse=async(idGrupo)=>{
        var data = {}
        data.usuarioID = Number(usuario.id) 
        data.grupoID = idGrupo
        var respuesta = await fetch(GetUrlApi()+'/api/Usuarios/UnirseAlGrupo', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(data)
        }).catch((err)=>{
            swal({
                title: "Error al unirse" ,
                icon: "error"
            })
            return
        });
        if(!respuesta){
            swal({
                title: "Error al unirse, compruebe su conexion a internet" ,
                icon: "error"
            })
            return
        }
        if (respuesta.ok) {
            const res = await respuesta.json()
            
        }
    }



    return (<div>
        
        {
            (gruposRecomendados.length===0)?(<p>No se encontraron grupos</p>):(
                gruposRecomendados.map((item,i)=>{
                    return (
                        <ul className="collection">
                            <li className="collection-item avatar">
                              <i className="material-icons circle red">play_arrow</i>
                              <span className="title">{item.nombre}</span>
                              <p>asda <br/>
                                 Second Line
                              </p>
                              <a onClick={()=>{Unirse(item.id)}} className="btn-floating btn-large waves-effect waves-light red secondary-content"><i class="material-icons">add</i></a>
                            </li>
                        </ul>)
                })
            )
        }
    </div>)
}

