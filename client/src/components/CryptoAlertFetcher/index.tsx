import React, { useEffect, useState } from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export interface CryptoAlert {
  id: number;
  threshold_operator: string;
  theshold_value: number;
  cryptocurrency: Cryptocurrency;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface CryptoAlertFetcherProps {
  children: (childProps: {
    loading: boolean;
    cryptoAlerts: CryptoAlert[];
  }) => React.ReactNode;
}

export function CryptoAlertFetcher(props: CryptoAlertFetcherProps) {
  const [cryptoAlerts, setCryptoAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/crypto_alerts", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setCryptoAlerts(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>{props.children({ cryptoAlerts, loading })}</React.Fragment>
  );
}
