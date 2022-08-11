import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeCard from "../pages/HomeCard";

 export const Authenticator = () => {
  const [isAuthentic, setAuthentic] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (!token) {
      setAuthentic(false);
    }
  }, [history, isAuthentic]);

  if (isAuthentic === true) {
    return (
      <>
        <Switch>
          <Route exact path="">
            <Login setAuthentic={setAuthentic}/>
          </Route>
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>
      );
    }  
};

export const Routes = () => {
    return (
      <Switch>
        <Route path="/home/:name">
          <HomeCard />
        </Route>
        <Route exact path="/">
          <Register/>
            </Route>
            
            <Route path="/login">
                <Login />
            </Route>
      </Switch>
    );
};

