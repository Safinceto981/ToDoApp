import React from 'react'
import ProfilePresenter from "./ProfilePresenter"
import firebase from "../../firebase";

export default function ProfileContainer() {
    const onClick = () => { firebase.logout(); }

    return (
        <div>
            <ProfilePresenter onClick={onClick} />
        </div>
    )
}
