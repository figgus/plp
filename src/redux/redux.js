import {createStore} from 'redux';

const initialState=
        {
            usuario:{
                id:0,
                nombreUsuario:'no logeado'
            },
            
        }


export const store=createStore(
    reducer,
    initialState
);

function reducer(state,{type,payload}){
    switch(type){
        case 'INICIA_SESION':return {
            ...state,
            usuario:payload
        }
        case 'CIERRA_SESION':return {
            ...state,
            usuario:{
                id:0,
                nombreUsuario:'no logeado'
            }
        }
        
        default:
            return state; 
    }
}

export const IniciarSesion=(usuario)=>(
    {
        type:'INICIA_SESION',
        payload:usuario
    }
)

export const CerrarSesion=()=>(
    {
        type:'CIERRA_SESION',
        payload:null
    }
)
