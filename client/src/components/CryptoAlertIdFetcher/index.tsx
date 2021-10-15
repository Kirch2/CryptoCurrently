import React, { useEffect, useState } from "react";

export interface CryptoAlert {
  id: number;
  label: string;
  threshold_operator: string;
  threshold_value: number;
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
