import React from 'react'

export default function ToDoPreviewPresenter(props, { todo }) {

    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.text}</p>
            <p>{todo.author}</p>
        </div>
    )
}
