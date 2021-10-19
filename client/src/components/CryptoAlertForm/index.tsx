import React, { useState } from "react";
import { Cryptocurrency } from "../CryptoFetcher";
import CurrencyInput from "react-currency-input-field";

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
        props.onSubmit({
          ...cryptoAlert,
          threshold_value: Number(cryptoAlert.threshold_value),
        });
      }}
    >
      <h1>Notify me if...</h1>
      <br />
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
        <h1>is...</h1>
        <br />
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
          className="form-control"
        >
          <option value=">">More than</option>
          <option value="<">Less than</option>
        </select>
        <br />
        <br />
      </div>
      <div className="mb-3">
        <div className="input-group mb-3">
          <span className="input-group-text bg-dark text-success">$</span>
          <CurrencyInput
            placeholder="Please enter target price"
            className="form-control"
            id="input-example"
            name="input-name"
            defaultValue={1000}
            decimalsLimit={2}
            onValueChange={(value, name) => {
              setCryptoAlert({
                ...cryptoAlert,
                // @ts-ignore
                threshold_value: value,
              });
            }}
            value={cryptoAlert.threshold_value}
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
          Set Notification
        </button>
      </div>
    </form>
  );
}
