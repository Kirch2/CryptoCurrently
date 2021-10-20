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
              <CryptoAlertForm
                action={"create"}
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
