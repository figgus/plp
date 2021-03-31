import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
//import {toggleTodoAction,deleteTodoAction} from '../../redux/redux';
import { GetUrlApi } from "../Globales/FuncionesGlobales";
import { ModalZoomImagen } from "./ModalZoomImagen";

export function PanelAdmin(){

    const todos = useSelector((state) => state);
    const dispatch = useDispatch();
    const [lista,setLista] = useState([]);

    const ClickImagen = (url)=>{
        document.getElementById('imgZoom').src = url
        document.getElementById('modal1').style.display = 'grid'
    }

    useEffect(async()=>{
        const M = window.M
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});

        var respuesta = await fetch(GetUrlApi()+'/api/Contenidos/GetContenidoNoAprovado', {
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
            setLista(res)
          }

    },[])

    
    return (
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
                {
                    lista.map((item,index)=>{
                        const url = 'https://localhost:44374/api/contenidos/getImage?nombreImagen='+item.urlFile
                        return (
                        <tr>
                            <td>
                                <img onClick={()=>{ClickImagen(url)}} height="50px" width="50px" src={url}/>
                            </td>
                            <td>
                                {item.titulo}
                            </td>
                            <td>
                                {item.descripcion}
                            </td>
                            <td>
                            <a classNames="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                                <i className="material-icons">zoom_in</i>
                                <i className="material-icons">check</i>
                            </td>
                        </tr>
                        )
                    })
                }
                
                
            </table>

                <ModalZoomImagen />
        </div>
    )
}