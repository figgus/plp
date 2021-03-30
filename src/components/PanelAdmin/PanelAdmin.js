import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
//import {toggleTodoAction,deleteTodoAction} from '../../redux/redux';

export function PanelAdmin(){

    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(todos)
    },[])

    
    return (
        <div>
            {todos.length}
            entro
        </div>
    )
}