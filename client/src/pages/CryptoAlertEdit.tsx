import { CryptoAlertUpdater } from "../components/CryptoAlertUpdater";
import { CryptoAlertForm } from "../components/CryptoAlertForm";
import { useParams } from "react-router-dom";
import { CryptoAlertIdFetcher } from "../components/CryptoAlertIdFetcher";
import { Loading } from "../components/Loading";
import { CryptoFetcher } from "../components/CryptoFetcher";

export function CryptoAlertEdit() {
  // @ts-ignore
  let { id } = useParams();
  return (
    <CryptoFetcher>
      {({ loading: fetchingCryptos, cryptocurrencies }) => (
        <CryptoAlertIdFetcher id={id}>
          {({ cryptoAlert, loading: fetching }) => {
            if (fetching || fetchingCryptos) {
              return <Loading />;
            }
            return (
              <CryptoAlertUpdater>
                {({ updateCryptoAlert, loading }) => (
                  <CryptoAlertForm
                    action={"update"}
                    threshold_operator={cryptoAlert.threshold_operator}
                    threshold_value={cryptoAlert.threshold_value}
                    cryptocurrency_id={cryptoAlert.cryptocurrency.id}
                    cryptocurrencies={cryptocurrencies}
                    loading={loading}
                    onSubmit={(watchList) => {
                      updateCryptoAlert({
                        id,
                        ...watchList,
                      });
                    }}
                  />
                )}
              </CryptoAlertUpdater>
            );
          }}
        </CryptoAlertIdFetcher>
      )}
    </CryptoFetcher>
  );
}
