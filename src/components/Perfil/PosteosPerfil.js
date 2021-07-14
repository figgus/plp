import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function PosteosPerfil(){
    const usuario = useSelector((state) => state.usuario);
    const [postUser,setPostUser] = useState([]);

    useEffect(async()=>{
        setPostUser(await GetPostUser(usuario.id))
    },[])

    return <div>
        <ul className="collection with-header">
            {
                postUser.map((item,i)=>{
                    return <li class="collection-item">
                        <div>
                            <p className="negrita sinMarginBottomTop">
                                {item.titulo}
                            </p>
                        {
                            item.texto
                        }
                            <div className="sinMarginBottomTop" className="row">
                                <div className="col s1">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">
                                        <i className="material-icons">message</i>
                                    </a>
                                </div>
                                <div className="col s1">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">
                                        <i className="material-icons">edit</i>
                                    </a>
                                </div>
                                <div className="col s1">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">
                                        <i className="material-icons">delete</i>
                                    </a>
                                </div>
                                <div class="col s1">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">
                                        <i className="material-icons">notifications</i>
                                        <i className="material-icons">notifications_off</i>
                                    </a>
                                </div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                                <div class="col s1"></div>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
        
    </div>
}


async function GetPostUser(id){
    var respuesta = await fetch(GetUrlApi()+'/api/Post/GetPostUser?id='+id, {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'get',
        credentials: 'include'
    }).catch((err)=>{
        swal({
            title: "Error al traer post del usuario" ,
            icon: "error"
        })
        return
    });

    if(!respuesta)
        return []
    if (respuesta.ok) {
        const res =await respuesta.json()
        return res;
    }
}