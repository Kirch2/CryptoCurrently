import React, { useState } from "react";

interface WatchListEntryDeleterProps {
  children: (childprops: {
    loading: boolean;
    deleteWatchListEntry: (watchlistentryid: number) => void;
  }) => React.ReactNode;
}
export function WatchListEntryDeleter(props: WatchListEntryDeleterProps) {
  const [loading, setLoading] = useState(false);

  function deleteWatchListEntry(watchlistentryid: number) {
    setLoading(true);
    fetch(`/api/watchlist_entries/${watchlistentryid}`, {
      method: "delete",
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
        deleteWatchListEntry,
      })}
    </React.Fragment>
  );
}
