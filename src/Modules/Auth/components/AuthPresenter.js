import React, { useState } from "react";
import firebase, { signInWithGoogle } from '../../../firebase';
export default function AuthPresenter() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler =
    (event, email, password) => {
      event.preventDefault();
    };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <div >

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 > Sign In</h1 >
      </div>
      <br ></br>
      <div >
        {error !== null && <div >{error}</div>}
        <form style={{ justifyContent: 'center', maxWidth: '70%', marginLeft: '15%' }}>
          <div className="form-group">
            <label htmlFor="userEmail" className="block">
              Email:
          </label>
            <input
              type="email"
              name="userEmail"
              value={email}
              className="form-control"
              placeholder="E.g: faruq123@gmail.com"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword" className="block">
              Password:
          </label>
            <input
              type="password"
              name="userPassword"
              value={password}
              className="form-control"
              placeholder="Your Password"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <button className="btn btn-primary" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
            Sign in
          </button>
        </form>
        <div style={{ display: 'relative', textAlign: 'center', justifyContent: 'center' }}>
          <p >or</p>
          <button className="btn btn-primary" onClick={() => signInWithGoogle}
          >
            Sign in with Google
        </button>
          <p >
            Don't have an account?{" "}
            <a href="/register" >
              Sign up here
          </a>{" "}
            <br />{" "}
            <a href="passwordReset" >
              Forgot Password?
          </a>
          </p>
        </div>
      </div>
    </div >
  );
};

