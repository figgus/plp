import { useEffect, useState } from "react"
import { GetUrlApi } from "../Globales/FuncionesGlobales";
import swal from "sweetalert";
import { useSelector } from "react-redux";

export function CrearGrupo(){
    const [TiposVisibilidad,setTiposVisibilidad] = useState([]);
    const usuario = useSelector((state) => state.usuario);

    useEffect(async()=>{
        var respuesta = await fetch(GetUrlApi()+'/api/NivelDeVisibilidad/', {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'get',
            credentials: 'include'
        }).catch((err)=>{
            swal({
                title: "Error al traer visibilidades" ,
                icon: "error"
            })
        });

        if (respuesta.ok) {
            const res =await respuesta.json()
            setTiposVisibilidad(res) 
            console.log(TiposVisibilidad)
        }
    },[])

    const PostCrearGrupo = async()=>{
      var visibilidades = document.getElementsByName('group1')
      var visibilidadId = null
      visibilidades.forEach((item)=>{
        if(item.checked){
          visibilidadId = item.value
        }
      })
    
      var data = {}
      data.nombre = document.getElementById('nombreGrupo').value
      data.soloAdultos = document.getElementById('chkSoloAdultos').checked
      data.nivelDeVisibilidadID = Number(visibilidadId) 
      data.usuarioCreadorID = Number(usuario.id) 
    
      var respuesta = await fetch(GetUrlApi()+'/api/Grupos/', {
          headers:{
              'Content-Type': 'application/json'
          },
          method: 'post',
          body:JSON.stringify(data),
          credentials: 'include'
      }).catch((err)=>{
          swal({
              title: "Error al traer visibilidades" ,
              icon: "error"
          })
      });
      
      if (respuesta.ok) {
          swal({
            title: "Grupo creado" ,
            icon: "success"
          }).then(()=>{
            CerrarModal()
          })
      }
    }



    return (
            <div id="modalCrearGrupo" className="modal">
                <div className="modal-content">
                  <h4>Crea un grupo</h4>
                  <hr/>
                  <p>Nombre</p>
                  <label>Este no podra cambiarse luego</label>
                  <input placeholder="Nombre" id="nombreGrupo" type="text" class="validate"/>
                  <br/>
                  <p>Tipo de grupo</p>
                  <form action="#">
                      {
                          TiposVisibilidad.map((item,index)=>{

                              return (
                                  <p>
                                    <label>
                                        <input value={item.id} name="group1" type="radio" checked />
                                        <span>{item.descripcion}</span>
                                    </label>
                                  </p>
                              )
                          })
                      }
                    </form>
                    <br/>
                    <p>
                        <label>
                          <input id="chkSoloAdultos" type="checkbox" className="filled-in" />
                          <span>Solo mayores de 18 años</span>
                        </label>
                    </p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                  <a href="javascript:void(0)" onClick={()=>{PostCrearGrupo()}} className="modal-close waves-effect waves-green btn-flat">Crear Grupo</a>
                </div>
            </div>
    )
}


function CerrarModal(){
  const M = window.M
      const elem = document.getElementById('modalCrearGrupo')
      var instance = M.Modal.getInstance(elem)
      instance.close()
}