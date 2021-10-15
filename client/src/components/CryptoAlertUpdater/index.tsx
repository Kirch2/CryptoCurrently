import { useHistory } from "react-router-dom";
import React, { useState } from "react";

interface Props {
  children: (childProps: {
    loading: boolean;
    updateCryptoAlert: (cryptoAlert: any) => void;
  }) => React.ReactNode;
}

//used to create to new newCryptoAlert
export function CryptoAlertUpdater(props: Props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function updateCryptoAlert(cryptoAlert: {
    id: number;
    threshold_operator: string;
    theshold_value: number;
    cryptocurrency_id: number;
  }) {
    setLoading(true);
    fetch(`/api/crypto_alerts/${cryptoAlert.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cryptoAlert),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push(`/crypto_alerts/${cryptoAlert.id}`);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        updateCryptoAlert,
      })}
    </React.Fragment>
  );
}
