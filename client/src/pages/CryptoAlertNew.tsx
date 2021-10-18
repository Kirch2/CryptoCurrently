import { CryptoAlertCreator } from "../components/CryptoAlertCreator";
import { CryptoAlertForm } from "../components/CryptoAlertForm";
import { CryptoFetcher } from "../components/CryptoFetcher";

export function CryptoAlertNew() {
  return (
    <CryptoFetcher>
      {({ loading: fetchingCryptos, cryptocurrencies }) => (
        <CryptoAlertCreator>
          {({ createCryptoAlert, loading }) => (
            <div>
              <h1>Create new CryptoAlert</h1>
              <CryptoAlertForm
                cryptocurrencies={cryptocurrencies}
                loading={loading}
                onSubmit={(newCryptoAlert) => {
                  createCryptoAlert(newCryptoAlert);
                }}
              />
            </div>
          )}
        </CryptoAlertCreator>
      )}
    </CryptoFetcher>
  );
}
