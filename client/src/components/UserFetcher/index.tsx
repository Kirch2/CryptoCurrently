import React, { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface UserFetcherProps {
  children: (childProps: {
    loading: boolean;
    users: User[];
  }) => React.ReactNode;
}

export function UserFetcher(props: UserFetcherProps) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/users", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setLoading(false);
      });
  }, []);

  return <React.Fragment>{props.children({ users, loading })}</React.Fragment>;
}
