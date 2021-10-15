import React, { useEffect, useState } from "react";

export interface Cryptocurrency {
  id: number;
  label: string;
  desciption: string;
  marketCap: number;
  price: number;
  symbol: string;
  logoUrl: string;
  change_24h: number;
  change_7d: number;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface CryptoFetcherProps {
  children: (childProps: {
    loading: boolean;
    cryptocurrencies: Cryptocurrency[];
  }) => React.ReactNode;
}

export function CryptoFetcher(props: CryptoFetcherProps) {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/cryptocurrencies", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setCryptocurrencies(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {props.children({ cryptocurrencies, loading })}
    </React.Fragment>
  );
}
