import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import WriteReview from "../components/cardIcons/writeReview";
import ToggleWatchlist from "../components/cardIcons/toggleWatchlist";

const WatchlistPage = () => {
    const { watchlist: movieIds } = useContext(MoviesContext);

    // Create an array of queries and run in parallel.
    const watchlistMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn: getMovie,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = watchlistMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }
    const watchlistMovies = watchlistMovieQueries.map((q) => q.data);

    return (
        <PageTemplate
            title="Watchlist"
            movies={watchlistMovies}
            action={(movie) => {
                return (
                    <>
                        <ToggleWatchlist movie={movie} />
                        <WriteReview movie={movie} />
                    </>
                );
            }}
        />
    );
};

export default WatchlistPage;
