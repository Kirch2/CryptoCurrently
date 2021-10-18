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
      <div className="d-block">
        <NavLink
          className="btn btn-outline-success btn-sm mx-2"
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
      <div className="d-flex align-items-center justify-content-between">
        <h1>Watchlists</h1>
        <NavLink to="/watchlists/new" className="btn btn-success">
          + New
        </NavLink>
      </div>
      <WatchlistFetcher>
        {({ loading, watchlists }) => {
          if (loading) {
            return <Loading />;
          }

          if (watchlists.length === 0) {
            return (
              <div className="card card-body text-center mt-3">
                <h4 className="card-text my-4">No Watchlists Found</h4>
              </div>
            );
          }

          return (
            <WatchListDeleter>
              {({ loading: deleting, deleteWatchList }) => (
                <div className="mt-2">
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
