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
  }

  onChangeLogin(event) {
    this.setState({ login: event.target.value });
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
        <Button
          label="Submit"
          handleClick={() => {
            localStorage.setItem("login", JSON.stringify(this.state.login));
            localStorage.setItem(
              "password",
              JSON.stringify(this.state.password)
            );
          }}
        />
      </form>
    );
  }
}

export default LoginForm;
