import React from 'react'
import firebase from '../../firebase';
const ProfilePresenter = (props) => {
  const user = firebase.auth.currentUser;
  let name = '';
  let email = ''
  let uid = '';

  const getUser = () => {
    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
    } else {
      name = '';
      email = ''
      uid = '';
    }
    return (name, email, uid);
  }
  getUser();
  function onClick() {
    firebase.signOut();
    props.history.push("/")
  }
  return (
    <div>

      <div>
        <div >
          <h2>getUser().name</h2>
          <h3 >getUser().email</h3>
        </div>
      </div>
      <button onClick={onClick}>Sign out</button>
    </div>
  )

}
export default ProfilePresenter;