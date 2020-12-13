import React, { useState } from 'react'
import { firestore } from '../../../firebase';
import ToDoEditPresenter from './ToDoEditPresenter'
export default function ToDoEditContainer() {
    const [inputValues, setInputValues] = useState({
        title: firestore,
        text: '',


    });
    return (
        <div>
            <ToDoEditPresenter />
        </div>
    )
}
