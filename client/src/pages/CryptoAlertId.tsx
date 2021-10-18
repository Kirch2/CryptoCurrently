import { Loading } from "../components/Loading";
import { CryptoAlertIdFetcher } from "../components/CryptoAlertIdFetcher";
import { useParams } from "react-router";
import { CryptoCard } from "../components/CryptoCard";
import { NavLink } from "react-router-dom";

export function CryptoAlertId() {
  // @ts-ignore
  let { id } = useParams();
  return (
    <CryptoAlertIdFetcher id={id}>
      {({ cryptoAlert, loading: fetching }) => {
        if (fetching) {
          return <Loading />;
        }

        return (
          <div>
            <h1>{cryptoAlert.label}</h1>
            <p>{cryptoAlert.description}</p>
            <NavLink to={`/crypto_alerts/${cryptoAlert.id}/edit`}>Edit</NavLink>
            <CryptoCard crypto={cryptoAlert.cryptocurrency} />
          </div>
        );
      }}
    </CryptoAlertIdFetcher>
  );
}
