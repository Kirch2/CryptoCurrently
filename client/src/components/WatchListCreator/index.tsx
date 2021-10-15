import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface WatchListCreatorProps {
  children: (childProps: {
    loading: boolean;
    createWatchList: (watchlist: any) => void;
  }) => React.ReactNode;
}

//used to create to new newWatchList
export function WatchListCreator(props: WatchListCreatorProps) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function createWatchList(newWatchList: any) {
    setLoading(true);
    fetch(`/api/watchlists`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWatchList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        history.push(`/watchlists/${data.id}`);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        createWatchList,
      })}
    </React.Fragment>
  );
}
