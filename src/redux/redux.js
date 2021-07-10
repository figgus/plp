import {createStore} from 'redux';

const initialState=
    {
        usuario:{
            id:0,
            nombreUsuario:'no logeado'
        },
        gruposDelUsuario:[],
        parametros : {}
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
        
        case 'UPDATE_GRUPOS_USER':return {
            ...state,
            gruposDelUsuario:payload
        }

        case 'UPDATE_PARAMETERS':return {
            ...state,
            parametros:payload
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

export const ActualizarGruposUsuarios=(grupos)=>(
    {
        type:'UPDATE_GRUPOS_USER',
        payload:grupos
    }
)

export const ActualizarParametros=(parametros)=>(
    {
        type:'UPDATE_PARAMETERS',
        payload:parametros
    }
)