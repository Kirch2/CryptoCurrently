import React, { useEffect, useState } from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export interface CryptoAlert {
  id: number;
  label: string;
  threshold_operator: string;
  threshold_value: number;
  description: string;
  private: boolean;
  cryptocurrency: Cryptocurrency;
}

const FETCH_OPTIONS = {
  method: "GET",
};

interface Props {
  id: number;
  children: (childProps: {
    loading: boolean;
    cryptoAlert: CryptoAlert;
  }) => React.ReactNode;
}

export function CryptoAlertIdFetcher(props: Props) {
  const [cryptoAlert, setCryptoAlert] = useState({
    label: "",
    description: "",
    threshold_operator: "",
    threshold_value: 0,
    private: false,
    id: 0,
    cryptocurrency: {
      id: 0,
      label: "",
      desciption: "",
      marketCap: 0,
      price: 0,
      symbol: "",
      logoUrl: "",
      change_24h: 0,
      change_7d: 0,
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/crypto_alerts/${props.id}`, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setCryptoAlert(res);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>{props.children({ cryptoAlert, loading })}</React.Fragment>
  );
}
