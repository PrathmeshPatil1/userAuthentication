import "./App.css";
import React from "react";
import Login from "./login/Login";
import { Router, Route, Link } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { AdminPage } from "./admin/AdminPage";
import { history } from "./helpers/history";
import { Role } from "./helpers/role";
import { authService } from "./helpers/services/auth-service";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
    };
  }

  componentDidMount() {
    authService.currentUser.subscribe((x) =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin,
      })
    );
  }

  logout() {
    authService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser && (
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {isAdmin && (
                  <li>
                    <Link to="/admin">Admin</Link>
                  </li>
                )}
                <li onClick={this.logout}>Logout</li>
              </ul>
            </nav>
          )}
          <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/admin"
              roles={[Role.Admin]}
              component={AdminPage}
            />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
