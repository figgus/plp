import {GetUrlApi} from '../Globales/FuncionesGlobales'

export function SubirContenido(){

    return (
        <div className="container">
            <h3>Subir contenido</h3>
            <hr/>
            <input placeholder="Titulo" id="titulo" type="text"/>
            <input placeholder="Descripcion" id="descripcion" type="text"/>

            <input placeholder="Archivo" id="archivo" type="file"/>
            <hr/>
            <a onClick={()=>{Enviar()}} className="waves-effect waves-light btn">Subir!!</a>
        </div>
    )
}

async function Enviar(){

    var data = {}
    data.titulo = document.getElementById("titulo").value
    data.descripcion = document.getElementById("descripcion").value

    console.log(JSON.stringify(data))
    console.log(process.env.urlApi)
    var respuesta = await fetch(GetUrlApi()+'/api/Contenidos', {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'post',
        body:JSON.stringify(data)
    }).catch((err)=>{
        console.log(err);
        alert('error')
        //swal({
        //    title: "Error al guardar el cierre" ,
        //    icon: "error"
        //})
    });
    if (respuesta.ok) {
        var contenidoCreado = await respuesta.json();
        const idCreada = contenidoCreado.id
        const operacionExitosa = await EnviarImagen(idCreada)
        if(operacionExitosa)
            alert('excito')
        else
            alert('no se pudo guardar la imagen')
        //swal({
        //    title: "Arqueo completado" ,
        //    icon: "success"
        //}).then(()=>{
        //    ContextoUsuario.setUsuario({
        //        nombre: 'Ninguno'
        //    });
        //});
    }
}


async function EnviarImagen(idContenidoAsociado){

    var contenido2 = new FormData();
    contenido2.append('File',document.getElementById("archivo").files[0])

    var respuesta = await fetch(GetUrlApi()+'/api/Contenidos/saveImage?id='+idContenidoAsociado, {
        headers:{
           // 'Content-Type': 'multipart/form-data;boundary= 1jufsdnhf4'
        },
        method: 'post',
        body:contenido2
    }).catch((err)=>{
        console.log(err);
        alert('error')
        //swal({
        //    title: "Error al guardar el cierre" ,
        //    icon: "error"
        //})
    });
    if (respuesta.ok){
        return true
    }
    else{
        return false
    }
}