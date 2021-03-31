import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
//import {toggleTodoAction,deleteTodoAction} from '../../redux/redux';
import { GetUrlApi } from "../Globales/FuncionesGlobales";
import { ModalZoomImagen } from "./ModalZoomImagen";
import swal from 'sweetalert'


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
                                <i onClick={()=>{Aprovar(item.id)}} className="material-icons">check</i>
                                <i className="material-icons">cancel</i>
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


export async function Aprovar(id){

    swal({
        title: "¿Esta seguro que desea aprovar esta imagen?",
        text:"Si confirma esta imagen será publicada",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(async(aprovar) => {
            if (aprovar) {
                var respuesta = await fetch(GetUrlApi()+'/api/Contenidos/AprovarContenido?id='+id, {
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    method: 'put'
                  }).catch((err)=>{
                      swal({
                          title: "Error al aprobar" ,
                          icon: "error"
                      })
                  });
                  if (respuesta.ok){
                    swal({
                        title: "Imagen publicada" ,
                        icon: "success"
                    })
                  }
            } 
        });
}