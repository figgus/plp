import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { GetUrlApi,TraerGruposUsuario,getCookie } from "../Globales/FuncionesGlobales";
import {GruposRecomendados} from './GruposRecomendados/GruposRecomendados'
import { TusGrupos } from "./TusGrupos";
import {PostRecomendados} from './PostRecomendados/PostRecomendados'
import {ActualizarGruposUsuarios} from '../../redux/redux'

export function MainUsuario(){
    
    const M = window.M
    const [gruposUser,setGruposUser] = useState([]);
    const usuario = useSelector((state) => state.usuario);
    const dispatch = useDispatch()

    useEffect(async()=>{
        
        var elems = document.querySelectorAll('.carousel')
        
        const id = getCookie('idUsuario')
        if(id){
            const gruposUser = await TraerGruposUsuario(id)
            setGruposUser(gruposUser)

            const updateGrupoUser = (gruposUser) => dispatch(ActualizarGruposUsuarios(gruposUser))
            updateGrupoUser(gruposUser)

            
        }
        M.Carousel.init(elems, {})
    },[])


    return (<div className="container">
        {
            (gruposUser.length>1)?(
            <div className="carousel">
                <a className="carousel-item" href="#one!"> <img src="https://localhost:44374/api/contenidos/getImage?nombreImagen=C:\Users\joaquin\Pictures\imagenesPlp\1 - 6_7_2021.jpg"/></a>
                <a className="carousel-item" href="#one!"> <img src="https://localhost:44374/api/contenidos/getImage?nombreImagen=C:\Users\joaquin\Pictures\imagenesPlp\1 - 6_7_2021.jpg"/></a>
                <a className="carousel-item" href="#one!"> <img src="https://localhost:44374/api/contenidos/getImage?nombreImagen=C:\Users\joaquin\Pictures\imagenesPlp\1 - 6_7_2021.jpg"/></a>
                <a className="carousel-item" href="#one!"> <img src="https://localhost:44374/api/contenidos/getImage?nombreImagen=C:\Users\joaquin\Pictures\imagenesPlp\1 - 6_7_2021.jpg"/></a>

            </div>):(null)
        }
        
            
            
            
        

        <div class="row">
            <div class="col s12">
              <ul class="tabs">
                <li class="tab col s4"><a class="active" href="#postRecomendados">Post recomendados</a></li>
                <li class="tab col s4"><a href="#test1">Tus Grupos</a></li>
                <li class="tab col s4"><a class="active" href="#test2">Grupos recomendados</a></li>
              </ul>
            </div>
            <div id="test1" class="col s12">
                <TusGrupos />
            </div>
            <div id="test2" class="col s12">
                <GruposRecomendados />
            </div>
            <div id="postRecomendados" class="col s12">
                <PostRecomendados />
            </div>
        </div>
    </div>)
}



