import React, { Component } from "react";
import { authService } from "../helpers";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errMessage: "",
  };
  render() {
    return (
      <div style={{padding:'0 25%'}}>
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <form
          id="login"
          onSubmit={(e) => {
            authService.login(this.state.username, this.state.password).then(
              () => {
                const { from } = this.props.location.state || {
                  from: { pathname: "/" },
                };
                this.props.history.push(from);
              },
              (error) => {
                this.setState({ errMessage: error });
              }
            );
            e.preventDefault();
          }}
        >
          <div>
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              value={this.state.username}
              placeholder="Enter the Username"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
          <div>
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              value={this.state.password}
              placeholder="Enter the Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <button type="submit">Login</button>
          {this.state.errMessage && (
            <div className="errorMessage">{this.state.errMessage}</div>
          )}
        </form>
      </div>
    );
  }
}
