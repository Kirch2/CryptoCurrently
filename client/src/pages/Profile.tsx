import React from "react";
import { Loading } from "../components/Loading";
import { UserIdFetcher } from "../components/UserIdFetcher";

export function Profile() {
  const user_id = Number(localStorage.getItem("user_id"));
  return (
    <div>
      <h1>Profile</h1>

      <UserIdFetcher id={user_id}>
        {({ user, loading }) => {
          if (loading) {
            return <Loading />;
          }
          return <pre>{JSON.stringify(user, null, 2)}</pre>;
        }}
      </UserIdFetcher>
    </div>
  );
}
