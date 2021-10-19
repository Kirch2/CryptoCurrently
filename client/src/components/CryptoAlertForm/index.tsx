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
      <h1>Alert me if...</h1>
      <div className="mb-3">
        <select
          className="form-control"
          onChange={(e) => {
            const cryptoId = Number(e.currentTarget.value);
            const crypto = cryptocurrencies.find((c) => c.id === cryptoId);
            console.log(crypto);
            setCryptoAlert({
              ...cryptoAlert,
              threshold_value: Math.floor(crypto?.price || 0),
              cryptocurrency_id: Number(e.currentTarget.value),
            });
          }}
        >
          <option>Select coin</option>
          {cryptocurrencies.map((crypto) => (
            <option value={crypto.id} key={crypto.id}>
              {crypto.label}
            </option>
          ))}
        </select>
        <br />
        <h1>Is...</h1>
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
          <option value=">">More than</option>
          <option value="<">Less than</option>
        </select>
      </div>
      <div className="mb-3">
        <div className="input-group mb-3">
          <span className="input-group-text bg-dark text-success">$</span>
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
      </div>
      <div className="mb-3"></div>
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
