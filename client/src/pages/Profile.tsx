import React from "react";
import { Loading } from "../components/Loading";
import { UserIdFetcher } from "../components/UserIdFetcher";
import { useHistory } from "react-router-dom";

export function Profile() {
  const user_id = Number(localStorage.getItem("user_id"));
  const history = useHistory();
  return (
    <div>
      <h1>Profile</h1>
      <br />
      <UserIdFetcher id={user_id}>
        {({ user, loading }) => {
          if (loading) {
            return <Loading />;
          }
          return (
            <div>
              <p className="fs-4 fw-light" style={{ letterSpacing: "1px" }}>
                <i className="fa fa-arrow-right text-success"></i> Email:{" "}
                {user.email}
              </p>
              <p className="fs-4 fw-light" style={{ letterSpacing: "1px" }}>
                <i className="fa fa-arrow-right text-success"></i> Username:{" "}
                {user.username}
              </p>

              <br />
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
                className="btn btn-outline-success w-100 fs-4"
              >
                Logout
              </a>
            </div>
          );
        }}
      </UserIdFetcher>
    </div>
  );
}
