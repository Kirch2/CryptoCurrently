import * as React from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export function CryptoCard(props: {
  crypto: Cryptocurrency;
  onDelete?: () => void;
}) {
  const { crypto, onDelete = null } = props;
  let priceBadgeCss = "mx-3 badge bg-success";
  let plussign = "+";
  if (crypto.change_24h < 0) {
    priceBadgeCss = "mx-3 badge bg-danger";
    plussign = "-";
  }
  return (
    <div className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img width="50" src={crypto.logoUrl} alt={crypto.label} />
        <p className="fs-3 px-3 mb-0">{crypto.label} </p>
        <div className="">
          <div className="badge bg-dark mx-2">{crypto.symbol}</div>
          <div className={priceBadgeCss}>${crypto.price.toLocaleString()}</div>
          <div className={priceBadgeCss}>
            {plussign} ${Math.abs(crypto.change_24h).toLocaleString()}
          </div>
        </div>
      </div>
      {onDelete !== null && (
        <button className="btn btn-danger btn-sm" onClick={() => onDelete()}>
          Remove
        </button>
      )}
    </div>
  );
}
