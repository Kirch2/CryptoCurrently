import { WatchListCreator } from "../components/WatchListCreator";
import { WatchListForm } from "../components/WatchListForm";

export function WatchListNew() {
  return (
    <WatchListCreator>
      {({ createWatchList, loading }) => (
        <div>
          <h1>Watchlist</h1>
          <WatchListForm
            loading={loading}
            onSubmit={(newWatchList) => {
              createWatchList(newWatchList);
            }}
          />
        </div>
      )}
    </WatchListCreator>
  );
}
