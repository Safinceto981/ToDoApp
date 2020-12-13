import React, { useState, useEffect } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../Routes/Routers";
import UserProvider from '../../Modules/Auth/UserProvider';
import firebase from '../../firebase';

const Layout = () => {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    })
  })
  return firebaseInitialized !== false ? ((
    <div>
      <UserProvider>
        <React.Fragment>
          <HeaderContainer />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <Footer />
        </React.Fragment>
      </UserProvider>
    </div>
  )
  ) : <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>

}
export default Layout;