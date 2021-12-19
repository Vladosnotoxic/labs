import React from "react";

import Button from "../Button";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => (
  <header>
    <Button
      label="Log Out"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
    <nav>
      <ul>
        <li>
          <Link to="/">MainPage</Link>
        </li>
        <li>
          <Link to="/sign-in">SignInPage</Link>
        </li>
        <li>
          <Link to="/profile">ProfilePage</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Layout = () => (
  <div>
    <Header />
    <div className="horizLine" />
  </div>
);

export default Layout;
