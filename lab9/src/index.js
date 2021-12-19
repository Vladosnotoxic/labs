
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignInPage from "./components/SignInPage";
import ProfilePage from "./components/ProfilePage";
import PrivatRoute from "./components/PrivatRoute";

import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
