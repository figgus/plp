
export function GetUrlApi(){
    return 'https://localhost:44374'
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

export function setCookieHttpOnly(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  debugger
  const script = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly;Secure;"
  console.log(script)
  alert('funciona')
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly;Secure;";
}

export function GetNombreDefault(){
  return 'no logeado'
}