import React, { useState } from "react";

interface CryptoAlertDeleterProps {
  children: (childprops: {
    loading: boolean;
    deleteCryptoAlert: (cryptoAlertid: number) => void;
  }) => React.ReactNode;
}
export function CryptoAlertDeleter(props: CryptoAlertDeleterProps) {
  const [loading, setLoading] = useState(false);

  function deleteCryptoAlert(cryptoAlertid: number) {
    setLoading(true);
    fetch(`/api/crypto_alerts/${cryptoAlertid}`, {
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
        deleteCryptoAlert,
      })}
    </React.Fragment>
  );
}
