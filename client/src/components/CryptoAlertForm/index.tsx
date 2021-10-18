import React, { useState } from "react";
import { Cryptocurrency } from "../CryptoFetcher";

interface CryptoAlertFormProps {
  loading: boolean;
  threshold_operator?: string;
  threshold_value?: number;
  cryptocurrency_id?: number;
  cryptocurrencies: Cryptocurrency[];
  onSubmit: (newCryptoAlert: any) => void;
}

export function CryptoAlertForm(props: CryptoAlertFormProps) {
  const {
    threshold_operator = ">",
    threshold_value = 0,
    cryptocurrency_id = 1,
    cryptocurrencies,
  } = props;
  const [cryptoAlert, setCryptoAlert] = useState({
    threshold_operator,
    threshold_value,
    user_id: 1,
    cryptocurrency_id,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(cryptoAlert);
      }}
    >
      <div className="mb-3">
        <label>CryptoAlert Label</label>
        <select
          value={cryptoAlert.threshold_operator}
          onChange={(e) => {
            setCryptoAlert({
              ...cryptoAlert,
              threshold_operator: e.currentTarget.value,
            });
          }}
          disabled={props.loading}
          required
          placeholder="Please enter the CryptoAlert label"
          className="form-control"
        >
          <option value=">">{">"}</option>
          <option value="<">{"<"}</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Threshold Value</label>
        <input
          value={cryptoAlert.threshold_value}
          onChange={(e) => {
            setCryptoAlert({
              ...cryptoAlert,
              threshold_value: Number(e.currentTarget.value),
            });
          }}
          disabled={props.loading}
          required
          type="number"
          placeholder="Please enter the CryptoAlert label"
          className="form-control"
        />
      </div>
      <div className="mb-1">
        <label>Cryptocurrency</label>
        <select
          className="form-control form-control-lg"
          onChange={(e) => {
            setCryptoAlert({
              ...cryptoAlert,
              cryptocurrency_id: Number(e.currentTarget.value),
            });
          }}
        >
          <option>Select Crypto to add to Watchlist</option>
          {cryptocurrencies.map((crypto) => (
            <option value={crypto.id} key={crypto.id}>
              {crypto.label}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          disabled={props.loading}
          className="btn btn-success"
        >
          Create CryptoAlert
        </button>
      </div>
    </form>
  );
}
