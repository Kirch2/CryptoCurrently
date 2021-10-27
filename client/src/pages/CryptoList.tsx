import { CryptoCard } from "../components/CryptoCard";
import { CryptoFetcher } from "../components/CryptoFetcher";
import { Loading } from "../components/Loading";

export function CryptoList() {
  return (
    <CryptoFetcher>
      {({ loading, cryptocurrencies }) => {
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <ul className="list-group">
              <i className="fs-4 fa fa-arrow-right me-2 text-success">
                <span className="text-light"> Listed by MarketCap</span>
              </i>
              <br />
              {cryptocurrencies.map((crypto) => (
                <CryptoCard crypto={crypto} key={crypto.id} />
              ))}
            </ul>
          </div>
        );
      }}
    </CryptoFetcher>
  );
}
