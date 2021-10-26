import React from "react";

export function Resources() {
  return (
    <div>
      <h1>Resources</h1>
      <ul className="list-unstyled">
        <li>
          <i className="fa fa-arrow-right me-2"></i>
          <a
            href="https://www.coindesk.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            CoinDesk
          </a>
        </li>
        <br />
        <li>
          <i className="fa fa-arrow-right me-2"></i>
          <a
            href="https://nydig.com/research/bitcoin-a-peer-to-peer-electronic-cash-system"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bitcoin: A Peer-to-Peer Electronic Cash System
          </a>
        </li>
        <br />
        <li>
          <i className="fa fa-arrow-right me-2"></i>
          <a
            href="https://www.bloomberg.com/crypto"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bloomberg Crypto
          </a>
        </li>
        <br />
        <li>
          <i className="fa fa-arrow-right me-2"></i>
          <a
            href="https://nydig.com/research/bitcoins-2q21-in-review"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            BitCoin in 2021
          </a>
        </li>
      </ul>
    </div>
  );
}
