import React, { useState } from "react";

interface WatchListDeleterProps {
  children: (childprops: {
    loading: boolean;
    deleteWatchList: (watchlistid: number) => void;
  }) => React.ReactNode;
}
export function WatchListDeleter(props: WatchListDeleterProps) {
  const [loading, setLoading] = useState(false);

  function deleteWatchList(watchlistid: number) {
    setLoading(true);
    fetch(`/api/watchlists/${watchlistid}`, {
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
        deleteWatchList,
      })}
    </React.Fragment>
  );
}
