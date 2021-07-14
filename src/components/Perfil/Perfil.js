import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import swal from "sweetalert";
import {GetUrlApi} from '../Globales/FuncionesGlobales'
import { PosteosPerfil } from "./PosteosPerfil";


const M = window.M

export function Perfil (){
    const usuario = useSelector((state) => state.usuario);

    useEffect(async()=>{
        InitTabsPerfil()
    },[])

    return <div className="container">
        <h5>Perfil de {usuario.nombreUsuario}</h5>
        <p>
            Presentacion
        </p>
        <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3"><a href="#posteos">Posteos</a></li>
            <li class="tab col s3"><a class="active" href="#comentarios">Comentarios</a></li>
            <li class="tab col s3"><a href="#mensajes">Mensajes</a></li>
          </ul>
        </div>
        <div id="posteos" class="col s12">
            <PosteosPerfil />
        </div>
        <div id="comentarios" class="col s12">Test 2</div>
        <div id="mensajes" class="col s12">Test 3</div>
  </div>
    </div>
}

function InitTabsPerfil(){
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems, {});
}

