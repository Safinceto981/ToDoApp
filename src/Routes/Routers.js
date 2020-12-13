import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardContainer from "../Modules/Dashboard/DashboardContainer";
import AuthContainer from "../Modules/Auth/AuthContainer";
import RegisterContainer from "../Modules/Auth/RegisterContainer";
import ProfileEditContainer from "../Modules/Profile/edit/ProfileEditContainer";
import ProfileContainer from "../Modules/Profile/ProfileContainer";
import { UserContext } from '../Modules/Auth/UserProvider';
import ToDoContainer from "../Modules/Todo/ToDoContainer";
import ToDoListContainer from '../Modules/Todo/toDoList/ToDoListContainer';
import ToDoPreviewContainer from '../Modules/Todo/toDoPreview/ToDoPreviewContainer';
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={DashboardContainer} />

    <Route exact path="/profile/edit/{id}" component={ProfileEditContainer} />
    <Route exact path="/profile" component={ProfileContainer} />
    <Route exact path="/todo" component={ToDoContainer} />
    <Route exact path="/todoList" component={ToDoListContainer} />
    <Route exact path="/todo/:id" component={ToDoPreviewContainer} />

  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={AuthContainer} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/login" component={AuthContainer} />
  </Switch>
);

const Routers = () => {
  const user = useContext(UserContext);
  if (user || localStorage.getItem("token")) {
    return <LoggedInRoutes />;
  } else {
    return <LoggedOutRoutes />;
  }
};

export default Routers;
