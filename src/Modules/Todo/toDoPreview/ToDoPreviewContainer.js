import React from 'react'
import firebase from '../../../firebase';
import TodoPreviewPresenter from './ToDoPreviewPresenter'
export default function ToDoPreviewContainer(props) {
    const id = props.match.params.id;
    console.log(props);

    var todoRef = firebase.db.collection("todo");

    const getData = () => {
        todoRef.where("id", "==", id).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (todo) {
                // doc.data() is never undefined for query doc snapshots
                console.log(todo.id, " => ", todo.data());
                return todo.data();
            });
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });;
    }
    // console.log(todo.data);
    console.log(getData().todo.data())
    return (
        <div>
            <TodoPreviewPresenter todo={getData().todo.data()} />
        </div>
    )
}
