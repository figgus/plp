import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActualizarParametros } from "../../redux/redux";

export function TusGrupos(){
    const gruposDelUsuario = useSelector((state) => state.gruposDelUsuario);
    const History = useHistory()
    const dispatch = useDispatch()
    
    const ClickGrupo =async (grupo)=>{
        
        const updateParams = (parametros) => dispatch(ActualizarParametros(parametros))
        debugger
        await updateParams({
            grupo : grupo.grupo

        })
        History.push('/MainGrupo?' + grupo.grupo.nombre)
    }
    
    return (<div>
        {
            (gruposDelUsuario.length===0)?(<p>No se encontraron grupos</p>):(
                gruposDelUsuario.map((item,i)=>{
                    return (
                        <ul className="collection">
                            <li onClick={()=>{ClickGrupo(item)}} style={{cursor:'pointer'}} className="collection-item avatar">
                              <i className="material-icons circle red">play_arrow</i>
                              <span className="title">{item.grupo.nombre}</span>
                              <p>asda <br/>
                                 Second Line
                              </p>
                              <a className="btn-floating btn-large waves-effect waves-light red secondary-content"><i className="material-icons">remove</i></a>
                            </li>
                        </ul>)
                })
            )
        }
    </div>)
}