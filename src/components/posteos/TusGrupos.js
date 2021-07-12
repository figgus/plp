import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActualizarParametros } from "../../redux/redux";

export function TusGrupos(){
    const gruposDelUsuario = useSelector((state) => state.gruposDelUsuario);
    const History = useHistory()
    const dispatch = useDispatch()
    
    const ClickGrupo =async (grupo)=>{
        
        const updateParams = (parametros) => dispatch(ActualizarParametros(parametros))
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
                        <div onClick={()=>{ClickGrupo(item)}} className="col s12 m7 Clickeable">
                            <div className="card horizontal">
                              <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6"/>
                              </div>
                              <div className="card-stacked">
                                <div className="card-content">
                                  <h5>{item.grupo.nombre}</h5>
                                  <p>
                                    Descripcion
                                  </p>
                                  
                                </div>
                                <div className="card-action">
                                  <a href="javascript:void(0)">  <i className="material-icons">add</i> Abandonar </a>
                                </div>
                              </div>
                            </div>
                        </div>)
                })
            )
        }

                        

    </div>)
}