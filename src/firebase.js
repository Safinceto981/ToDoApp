import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import app from "firebase/app";


var firebaseConfig = {
  apiKey: "AIzaSyDwMDzN3mRK7AFEIW0YVSpXENTunV0baMk",
  authDomain: "reactapp-1f835.firebaseapp.com",
  projectId: "reactapp-1f835",
  storageBucket: "reactapp-1f835.appspot.com",
  messagingSenderId: "516388154938",
  appId: "1:516388154938:web:fcf744a8285844c8774f03",
  measurementId: "G-2B5VX0NWY1"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth();
    this.db = app.firestore
  }
  login(email, password) {
    const jwt = this.auth.currentUser.getIdToken;
    localStorage.setItem('jwt', jwt);
    return this.auth.signInWithEmailAndPassword(email, password);

  }
  logout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    const jwt = this.auth.currentUser.getIdToken;
    localStorage.setItem('jwt', jwt);
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

}

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(googleProvider).then((res) => {
    var jwt = res.credential.accessToken;
    console.log(res)
  }).catch((error) => {
    console.log(error.message)
  })
}



export default new Firebase();