import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
        <>
        <div className = "form-header"><h1>Login</h1></div>
      <form
      id = "login"
        onSubmit={(e) => {
          console.log(this.state);
          e.preventDefault();
        }}
      >
        <div>
          <label><b>Username</b></label>
          <input
            type="text"
            value={this.state.username}
            placeholder = "Enter the Username"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
        </div>
        <div>
          <label><b>Password</b></label>
          <input
            type="password"
            value={this.state.password}
            placeholder = "Enter the Password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </>
    );
  }
}
