import { Watchlist, WatchlistFetcher } from "../components/WatchlistFetcher";
import { Loading } from "../components/Loading";
import { NavLink } from "react-router-dom";
import { WatchListDeleter } from "../components/WatchListDeleter";

export function WatchlistCard(props: {
  watchlist: Watchlist;
  loading: boolean;
  onDelete: () => void;
}) {
  const { watchlist } = props;
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <NavLink exact to={`/watchlists/${watchlist.id}`}>
        {watchlist.label}
      </NavLink>
      <div className="btn-group">
        <NavLink
          className="btn btn-outline-primary btn-sm"
          to={`/watchlists/${watchlist.id}/edit`}
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

export function WatchLists() {
  return (
    <div>
      <h1>Watchlists</h1>
      <WatchlistFetcher>
        {({ loading, watchlists }) => {
          if (loading) {
            return <Loading />;
          }

          return (
            <WatchListDeleter>
              {({ loading: deleting, deleteWatchList }) => (
                <div className="">
                  {watchlists.map((watchlist) => (
                    <WatchlistCard
                      watchlist={watchlist}
                      key={watchlist.id}
                      loading={deleting}
                      onDelete={() => {
                        deleteWatchList(watchlist.id);
                      }}
                    />
                  ))}
                </div>
              )}
            </WatchListDeleter>
          );
        }}
      </WatchlistFetcher>
    </div>
  );
}
