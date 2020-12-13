import React from 'react'


export default function ToDoPresenter({ createTodo, handleChange, inputValues }) {

    return (
        <div>

            <form style={{ textAlign: 'center' }}>
                <h1>Add Todo note</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <input className="title" name="title" type="text" onChange={handleChange} value={inputValues.title} />
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <input className="text" name="text" type="text" onChange={handleChange} value={inputValues.text} />
                </div>
                <button onClick={createTodo}>Add Todo</button>
            </form>
        </div>
    )
}
