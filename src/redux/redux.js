import {createStore} from 'redux';

const initialState={
    todos:[
        {
            id:1,
            name:'go to gym',
            complete:false
        },{
            id:2,
            name:'do laundry',
            complete:true
        },

    ]
}

export const store=createStore(
    reducer,
    initialState
);

function reducer(state,{type,payload}){
    switch(type){
        case 'ADD_TODO':return {
            ...state,
            todos:[...state.todos,payload]
        }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos:state.todos.map(todo=>(todo.id===payload)?{...todo,complete:!todo.complete}:todo)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo=>todo.id!==payload)
            }
        default:
            return state; 
    }
}

export const addTodoAction=(todo)=>(
    {
        type:'ADD_TODO',
        payload:todo
    }
)

export const toggleTodoAction = todoid =>(
    {
        type:'TOGGLE_TODO',
        payload:todoid
    }
)

export const deleteTodoAction=todoid=>(
    {
        type:'DELETE_TODO',
        payload:todoid
    }
)