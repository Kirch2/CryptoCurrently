import React, { useEffect, useState } from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export interface WatchListEntry {
  id: number;
  cryptocurrency: Cryptocurrency;
  watchlist: {
    id: number;
  };
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface WatchListEntryFetcherProps {
  children: (childProps: {
    loading: boolean;
    watchlistentries: WatchListEntry[];
  }) => React.ReactNode;
}
export function WatchListEntryFetcher(props: WatchListEntryFetcherProps) {
  const [watchlistentries, setWatchlistentries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/watchlist_entries", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setWatchlistentries(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {props.children({ watchlistentries, loading })}
    </React.Fragment>
  );
}
