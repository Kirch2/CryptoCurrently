import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface CryptoAlertCreatorProps {
  children: (childProps: {
    loading: boolean;
    createCryptoAlert: (cryptoAlert: any) => void;
  }) => React.ReactNode;
}

//used to create to new newCryptoAlert
export function CryptoAlertCreator(props: CryptoAlertCreatorProps) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function createCryptoAlert(newCryptoAlert: any) {
    setLoading(true);
    fetch(`/api/crypto_alerts`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCryptoAlert),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        history.push(`/crypto_alerts`);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        createCryptoAlert,
      })}
    </React.Fragment>
  );
}
