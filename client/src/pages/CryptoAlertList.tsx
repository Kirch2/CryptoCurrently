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
      <NavLink
        className="text-decoration-none"
        exact
        to={`/crypto_alerts/${cryptoAlert.id}`}
      >
        {cryptoAlert.cryptocurrency.label} Alert
      </NavLink>
      <div>
        <NavLink
          className="btn btn-outline-success btn-sm mx-2"
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
        <h1>Alerts</h1>
        <NavLink to="/crypto_alerts/new" className="btn btn-success">
          + New
        </NavLink>
      </div>
      <CryptoAlertFetcher>
        {({ loading, cryptoAlerts }) => {
          if (loading) {
            return <Loading />;
          }

          if (cryptoAlerts.length === 0) {
            return (
              <div className="card card-body text-center mt-3">
                <h4 className="card-text my-4">No Crypto Alerts Found</h4>
              </div>
            );
          }

          return (
            <CryptoAlertDeleter>
              {({ loading: deleting, deleteCryptoAlert }) => (
                <div className="mt-2">
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
