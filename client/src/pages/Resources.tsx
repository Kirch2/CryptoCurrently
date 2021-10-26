import React from "react";

export function Resources() {
  return (
    <div>
      <h1>Resources</h1>
      <ul>
        <li>
          <a
            className="bi bi-box-arrow-right"
            href="https://www.coindesk.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            CoinDesk
          </a>
        </li>
        <br />
        <li>
          <a
            className="bi bi-box-arrow-right"
            href="https://nydig.com/research/bitcoin-a-peer-to-peer-electronic-cash-system"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bitcoin: A Peer-to-Peer Electronic Cash System
          </a>
        </li>
        <br />
        <li>
          <a
            className="bi bi-box-arrow-right"
            href="https://www.bloomberg.com/crypto"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bloomberg
          </a>
        </li>
        <br />
        <li>
          <a
            className="bi bi-box-arrow-right"
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
