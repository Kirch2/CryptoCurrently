import { NavLink } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

export interface NavBarProps {
  loggedIn: boolean;
}

export function Navbar(props: NavBarProps) {
  const history = useHistory();
  const { loggedIn } = props;
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/cryptocurrencies"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-2 text-dark">CryptoView</span>
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/cryptocurrencies"
            >
              Cryptocurrencies
            </NavLink>
          </li>
          {loggedIn === true && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists"
                >
                  Watchlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists/new"
                >
                  New Watchlist
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  href="#logout"
                  onClick={(e) => {
                    e.preventDefault();
                    delete localStorage.username;
                    delete localStorage.user_id;
                    delete localStorage.email;
                    history.push("/login");
                    window.location.reload();
                  }}
                  className="nav-link"
                >
                  Logout
                </a>
              </li>
            </React.Fragment>
          )}

          {loggedIn === false && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </header>
    </div>
  );
}
