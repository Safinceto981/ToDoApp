import React, { useState } from 'react'
import ToDoPresenter from "./ToDoPresenter"
import firebase from "../../firebase";

export default function ToDoContainer() {
    const [inputValues, setInputValues] = useState({
        title: '',
        text: '',


    });
    const createTodo = (event) => {
        event.preventDefault();
        const titles = inputValues.title;
        const texts = inputValues.text;
        console.log(titles)
        // const todoRef = firebase.database().ref('todo');

        firebase
            .db
            .collection("todo")
            .add({
                title: titles,
                text: texts,
                author: firebase.auth().currentUser.displayName,
                postedAt: Date.now(),
                complete: false,
            })
            .then(ref => {
                console.log("Added document with ID: ", ref.id)
            });



    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };
    return (
        <div>
            <ToDoPresenter createTodo={createTodo} handleChange={handleChange} inputValues={inputValues} />
        </div>
    )
}
