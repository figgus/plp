import { useEffect } from "react"
import { useSelector } from "react-redux";
import { CrearPostTexto } from "../MainGrupo/OpcionesCrearPost/CrearPostTexto";

export function CrearPost(){
    const M = window.M
    const parametros = useSelector((state) => state.parametros)
    const grupoSeleccionado = parametros.grupo
    console.log(grupoSeleccionado)

    useEffect(()=>{
        var el = document.getElementById('tabs')
        M.Tabs.init(el, {})
    })

    return (<div className="container">
        <h4>
            Publicando en {ConditionalRender(grupoSeleccionado)}
        </h4>
        <div className="row">
            <div className="col s12">
              <ul id="tabs" className="tabs">
                <li className="tab col s3"><a className="active" href="#test1">Texto</a></li>
                <li className="tab col s3"><a href="#test2">Multimedia</a></li>
                <li className="tab col s3"><a href="#test3">Link</a></li>
                <li className="tab col s3 disabled"><a href="#test4">Encuesta</a></li>
              </ul>
            </div>
            <div id="test1" className="col s12">
                <CrearPostTexto />
            </div>
            <div id="test2" className="col s12">Test 2</div>
            <div id="test3" className="col s12">Test 3</div>
            <div id="test4" className="col s12">Test 4</div>
        </div>
    </div>)
}

function ConditionalRender(item){
    if(!item){
        return null
    }
    else{
        return item.nombre
    }
}