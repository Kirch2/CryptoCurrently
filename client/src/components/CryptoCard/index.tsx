import * as React from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export function CryptoCard(props: {
  crypto: Cryptocurrency;
  onDelete?: () => void;
}) {
  const { crypto, onDelete = null } = props;
  const [imgSrc, setImgSrc] = React.useState(
    `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32@2x/color/${crypto.symbol.toLocaleLowerCase()}@2x.png`
  );
  React.useEffect(() => {
    setImgSrc(
      `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32@2x/color/${crypto.symbol.toLocaleLowerCase()}@2x.png`
    );
  }, [crypto.symbol]);
  let className = "card mb-3 border-success";
  let labelClassName = "fs-5 px-3 mb-0 text-success fw-bolder";
  let priceBadgeCss = "badge bg-success text-dark fs-6";
  let plussign = "+";
  if (crypto.change_24h < 0) {
    priceBadgeCss = "badge bg-danger text-dark fs-6";
    labelClassName = "fs-5 px-3 mb-0 text-danger fw-bolder";
    plussign = "-";
    className = "card mb-3 border-danger";
  }

  return (
    <div className={className}>
      <div className="my-3 mx-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {/* <img width="50" src={crypto.logoUrl} alt={crypto.label} /> */}
          <img
            width="25"
            src={imgSrc}
            onError={() => {
              setImgSrc(
                `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32@2x/color/${"btc"}@2x.png`
              );
            }}
            alt={crypto.label}
          />
          <p className={labelClassName}>{crypto.label} </p>
        </div>

        <div className="d-flex align-items-center">
          <div className="badge bg-dark fs-6">{crypto.symbol}</div>
          <div className={`mx-3 ${priceBadgeCss}`}>
            ${crypto.price.toLocaleString()}
          </div>
          <div className={priceBadgeCss}>
            {plussign}
            {Math.abs(crypto.change_24h).toLocaleString()}% / 24hr
          </div>
          {onDelete !== null && (
            <button
              className="ms-3 btn btn-outline-danger btn-sm"
              onClick={() => onDelete()}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
