import React, { useEffect, useState } from "react";

export interface Watchlist {
  id: number;
  label: string;
  description: string;
  private: boolean;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface Props {
  id: number;
  children: (childProps: {
    loading: boolean;
    watchlist: Watchlist;
  }) => React.ReactNode;
}

export function WatchListIdFetcher(props: Props) {
  const [watchlist, setWatchlist] = useState({
    label: "",
    description: "",
    private: false,
    id: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/watchlists/${props.id}`, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setWatchlist(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>{props.children({ watchlist, loading })}</React.Fragment>
  );
}
