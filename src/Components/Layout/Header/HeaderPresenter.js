import React from 'react'
import firebase from '../../../firebase'
export default function HeaderPresenter() {
  const getImage = () => {
    if
      (firebase.auth.currentUser != null && firebase.auth.currentUser.photoURL != null) {


      return <img src={firebase.auth.currentUser.photoURL} width="24" height="24" alt="photourl" />

    } else return (<image xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></image>)
  }
  getImage();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/todo">addTodo <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/todoList">Link</a>
            </li>


          </ul>
          <div className="nav-item" >

            {getImage()}
          </div>
        </div>
      </nav>
    </div>
  )
}
