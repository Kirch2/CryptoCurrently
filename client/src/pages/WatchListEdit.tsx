import { WatchListUpdater } from "../components/WatchListUpdater";
import { WatchListForm } from "../components/WatchListForm";
import { useParams } from "react-router-dom";
import { WatchListIdFetcher } from "../components/WatchListIdFetcher";
import { Loading } from "../components/Loading";

export function WatchListEdit() {
  // @ts-ignore
  let { id } = useParams();
  return (
    <WatchListIdFetcher id={id}>
      {({ watchlist, loading: fetching }) => {
        if (fetching) {
          return <Loading />;
        }
        return (
          <WatchListUpdater>
            {({ updateWatchList, loading }) => (
              <div>
                <h1>Edit watchlist</h1>
                <WatchListForm
                  label={watchlist.label}
                  description={watchlist.description}
                  isPrivate={watchlist.private}
                  loading={loading}
                  onSubmit={(watchList) => {
                    updateWatchList({
                      id,
                      ...watchList,
                    });
                  }}
                />
              </div>
            )}
          </WatchListUpdater>
        );
      }}
    </WatchListIdFetcher>
  );
}
