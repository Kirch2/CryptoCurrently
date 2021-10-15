import { WatchListCreator } from "../components/WatchListCreator";
import { WatchListForm } from "../components/WatchListForm";

export function WatchListNew() {
  return (
    <WatchListCreator>
      {({ createWatchList, loading }) => (
        <div>
          <h1>Create new watchlist</h1>
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
