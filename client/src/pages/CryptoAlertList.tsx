import {
  CryptoAlert,
  CryptoAlertFetcher,
} from "../components/CryptoAlertFetcher";
import { Loading } from "../components/Loading";
import { NavLink } from "react-router-dom";
import { CryptoAlertDeleter } from "../components/CryptoAlertDeleter";

export function CryptoAlertCard(props: {
  cryptoAlert: CryptoAlert;
  loading: boolean;
  onDelete: () => void;
}) {
  const { cryptoAlert } = props;
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <NavLink exact to={`/crypto_alerts/${cryptoAlert.id}`}>
        {cryptoAlert.cryptocurrency.label} Alert
      </NavLink>
      <div className="btn-group">
        <NavLink
          className="btn btn-outline-primary btn-sm"
          to={`/crypto_alerts/${cryptoAlert.id}/edit`}
        >
          Edit
        </NavLink>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => props.onDelete()}
          disabled={props.loading}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export function CryptoAlerts() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Crypto Alerts</h1>
        <NavLink to="/crypto_alerts/new" className="btn btn-primary">
          + New
        </NavLink>
      </div>
      <CryptoAlertFetcher>
        {({ loading, cryptoAlerts }) => {
          if (loading) {
            return <Loading />;
          }

          return (
            <CryptoAlertDeleter>
              {({ loading: deleting, deleteCryptoAlert }) => (
                <div className="">
                  {cryptoAlerts.map((cryptoAlert) => (
                    <CryptoAlertCard
                      cryptoAlert={cryptoAlert}
                      key={cryptoAlert.id}
                      loading={deleting}
                      onDelete={() => {
                        deleteCryptoAlert(cryptoAlert.id);
                      }}
                    />
                  ))}
                </div>
              )}
            </CryptoAlertDeleter>
          );
        }}
      </CryptoAlertFetcher>
    </div>
  );
}
