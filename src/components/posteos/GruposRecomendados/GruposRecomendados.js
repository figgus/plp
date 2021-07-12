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
                        <div className="col s12 m7 Clickeable">
                            <div className="card horizontal">
                              <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6"/>
                              </div>
                              <div className="card-stacked">
                                <div className="card-content">
                                  <h5>{item.nombre}</h5>
                                  <p>
                                    Descripcion
                                  </p>
                                  
                                </div>
                                <div className="card-action">
                                  <a  onClick={()=>{Unirse(item.id)}} href="javascript:void(0)">  <i className="material-icons">add</i> Unirse </a>
                                </div>
                              </div>
                            </div>
                        </div>
                        )
                })
            )
        }

                        
    </div>)
}

