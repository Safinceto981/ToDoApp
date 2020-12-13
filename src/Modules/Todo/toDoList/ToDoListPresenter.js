import React from 'react'
import { Link } from 'react-router-dom';
export default function ToDoListPresenter({ todo }, props) {
    const deleteTodo = () => {

    }
    const editTodo = ({ todo }) => {
        console.log(todo);

    }
    const todoPreview = ({ todo }) => {
        console.log(todo);
        // props.history.push(`/todo/${todo.id}`);
        // <a href={`/todo/${todo.id}`} />
        return <Link to={`/todo/${todo.id}`} />


    }

    return (
        <div>
            <table>
                {todo.length === 0 ? <p>make  your first todo</p> : todo.map((todo, index) => <div><Link to={`/todo/${todo.id}`} >< h1 >{todo.title}</h1></Link>

                    <button onClick={deleteTodo}>Delete</button>
                    <button onClick={() => editTodo({ todo })}>Edit</button>
                </div>)}


            </table>
        </div>
    )
}
