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
            <h1>Cryptocurrencies</h1>
            <ul className="list-group">
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
