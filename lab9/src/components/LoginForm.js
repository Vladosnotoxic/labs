import React from "react";
import "../styles.css";
import Button from "../Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
    localStorage.setItem(
      "password",
      JSON.stringify(this.state.password)
    );
  }

  onChangeLogin(event) {
    this.setState({ login: event.target.value });
    localStorage.setItem("login", JSON.stringify(this.state.login));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <label>
            {" "}
            Login:{" "}
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.onChangeLogin}
            />
          </label>
        </p>
        <p>
          <label>
            {" "}
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </label>
        </p>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default LoginForm;
