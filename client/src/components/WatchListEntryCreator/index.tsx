import React, { useState } from "react";

interface WatchListEntryCreatorProps {
  children: (childProps: {
    loading: boolean;
    createWatchListEntry: (watchlist: any) => void;
  }) => React.ReactNode;
}

//used to create to new newWatchList
export function WatchListEntryCreator(props: WatchListEntryCreatorProps) {
  const [loading, setLoading] = useState(false);

  function createWatchListEntry(newWatchListEntry: any) {
    setLoading(true);
    fetch(`/api/watchlist_entries`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWatchListEntry),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
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
        createWatchListEntry,
      })}
    </React.Fragment>
  );
}
