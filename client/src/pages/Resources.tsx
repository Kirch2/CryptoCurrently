import React from "react";

export function Resources() {
  return (
    <div>
      <h1>Resources</h1>
      <br />
      <ul className="list-unstyled">
        <li className="fs-4" style={{ letterSpacing: "1px" }}>
          <i className="fa fa-arrow-right me-2 text-success"></i>
          <a
            href="https://www.coindesk.com/"
            className="link-light"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            CoinDesk
          </a>
        </li>
        <br />
        <li className="fs-4" style={{ letterSpacing: "1px" }}>
          <i className="fa fa-arrow-right me-2 text-success"></i>
          <a
            href="https://www.coinmarketcap.com/"
            className="link-light"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            CoinMarketCap
          </a>
        </li>
        <br />
        <li className="fs-4" style={{ letterSpacing: "1px" }}>
          <i className="fa fa-arrow-right me-2 text-success"></i>
          <a
            href="https://nydig.com/research/bitcoin-a-peer-to-peer-electronic-cash-system"
            className="link-light"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bitcoin: A Peer-to-Peer Electronic Cash System
          </a>
        </li>
        <br />
        <li className="fs-4" style={{ letterSpacing: "1px" }}>
          <i className="fa fa-arrow-right me-2 text-success"></i>
          <a
            href="https://www.bloomberg.com/crypto"
            className="link-light"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bloomberg Crypto
          </a>
        </li>
        <br />
        <li className="fs-4" style={{ letterSpacing: "1px" }}>
          <i className="fa fa-arrow-right me-2 text-success"></i>
          <a
            href="https://nydig.com/research/bitcoins-2q21-in-review"
            className="link-light"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bitcoin in 2021
          </a>
        </li>
      </ul>
    </div>
  );
}
