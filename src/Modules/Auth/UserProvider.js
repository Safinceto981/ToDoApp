import React, { useState, useEffect, createContext } from "react";
import firebase from "../../firebase";
export const UserContext = createContext({ user: null })
const UserProvider = (props) => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        setuser({
          displayName,
          email
        })
      }
    })
  }, [])
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}
export default UserProvider;
