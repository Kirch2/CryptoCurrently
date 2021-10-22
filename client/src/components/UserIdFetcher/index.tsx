import React, { useEffect, useState } from "react";

export interface User {
  id: number;
  username: string;
  email: string;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface Props {
  id: number;
  children: (childProps: { loading: boolean; user: User }) => React.ReactNode;
}

export function UserIdFetcher(props: Props) {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    id: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/users/${props.id}`, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }, []);

  return <React.Fragment>{props.children({ user, loading })}</React.Fragment>;
}
