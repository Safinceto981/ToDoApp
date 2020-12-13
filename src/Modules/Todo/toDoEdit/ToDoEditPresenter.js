import React from 'react'

export default function ToDoEditPresenter({ handleSubmit }) {
    return (
        <div>
            <input
                placeholder='Име'
                name='firstName'
            />
            <input
                placeholder='Фамилия'
                name='lastName'
            />

            <button
                text={'Запиши'}
                onClick={handleSubmit}
            >Запиши</button>
        </div>
    );




}
