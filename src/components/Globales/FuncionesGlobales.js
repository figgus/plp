
export function GetUrlApi(){
    return process.env.REACT_APP_URL_API
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString()
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


export function GetNombreDefault(){
  return 'no logeado'
}

export async function TraerGruposUsuario(id){
  var respuesta = await fetch(GetUrlApi()+'/api/Usuarios/GetGruposUsuario?id='+id, {
      headers:{
          'Content-Type': 'application/json'
      },
      method: 'get',
      credentials: 'include'
  }).catch((err)=>{
      return -1
  });
  if(!respuesta){
      
      return -1
  }
  if (respuesta.ok) {
      const res = await respuesta.json()
      return res
  }

}