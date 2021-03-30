import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {toggleTodoAction,deleteTodoAction} from '../../redux/redux';

export function PanelAdmin(){

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    useEffect(()=>{
        console.log(todos)
    },[])

    
    return (
        <div>
            {todos.length}
        </div>
    )
}