import React from "react";
import { UserAuthenticator } from "../components/UserAuthenticator";

export function LoginForm(props: { onSubmit: (newUser: any) => void }) {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(user);
      }}
    >
      <h1>Login</h1>
      <input
        required
        value={user.username}
        onChange={(e) => {
          setUser({
            ...user,
            username: e.currentTarget.value,
          });
        }}
        type="text"
        placeholder="Please enter your username"
        className="login-field form-control"
      />
      <br />

      <input
        required
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({
            ...user,
            password: e.currentTarget.value,
          });
        }}
        placeholder="Please enter your password"
        className="login-field form-control"
      />
      <br />
      <input type="submit" className="btn btn-primary" id="login-button" />
    </form>
  );
}

export function Login() {
  return (
    <UserAuthenticator>
      {({ authenticateUser, loading }) => (
        <LoginForm
          onSubmit={(user) => {
            console.log(user);
            authenticateUser(user);
          }}
        />
      )}
    </UserAuthenticator>
  );
}
