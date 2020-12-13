import React, { useState, useEffect } from 'react'
import ToDoListePresenter from "./ToDoListPresenter"
import firebase from '../../../firebase'
export default function ToDoListContainer() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [])
    const getTodos = () => {
        firebase.db.collection('todo').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    setTodos(prev => ([...prev, doc.data()]))
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <div>
            <ToDoListePresenter todo={todos} />
        </div>
    )
}
