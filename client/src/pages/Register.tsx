import React from "react";
import { UserCreator } from "../components/UserCreator";

export function RegisterForm(props: { onSubmit: (newUser: any) => void }) {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(user);
      }}
    >
      <h1>Register</h1>
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
        value={user.email}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.currentTarget.value,
          });
        }}
        type="email"
        placeholder="Please enter your email"
        className="login-field form-control"
      />
      <br />
      <input type="submit" className="btn btn-primary" id="login-button" />
    </form>
  );
}

export function Register() {
  return (
    <UserCreator>
      {({ createUser, loading }) => (
        <RegisterForm
          onSubmit={(newUser) => {
            console.log(newUser);
            createUser(newUser);
          }}
        />
      )}
    </UserCreator>
  );
}
