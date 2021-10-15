import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: (childProps: {
    loading: boolean;
    authenticateUser: (authenticateUser: any) => void;
  }) => React.ReactNode;
}

//used to create to new newWatchList
export function UserAuthenticator(props: Props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function authenticateUser(authenticateUser: any) {
    setLoading(true);
    fetch(`/api/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authenticateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.email && !data.username) {
          alert(
            "Login unsuccessful - please enter you username and password and try again"
          );
          return;
        }

        setLoading(false);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("user_id", data.id);
        history.push(`/cryptocurrencies`);
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        authenticateUser,
      })}
    </React.Fragment>
  );
}
