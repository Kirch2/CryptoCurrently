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

interface WatchlistFetcherProps {
  children: (childProps: {
    loading: boolean;
    watchlists: Watchlist[];
  }) => React.ReactNode;
}

export function WatchlistFetcher(props: WatchlistFetcherProps) {
  const [watchlists, setWatchlists] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/watchlists", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setWatchlists(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>{props.children({ watchlists, loading })}</React.Fragment>
  );
}
