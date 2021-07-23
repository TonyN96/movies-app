import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import WriteReview from "../components/cardIcons/writeReview";
import ToggleFavourites from "../components/cardIcons/toggleFavourites";
import SiteHeader from "../components/siteHeader";

const FavoriteMoviesPage = () => {
    const { favorites: movieIds } = useContext(MoviesContext);

    // Create an array of queries and run in parallel.
    const favoriteMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn: getMovie,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }
    const favoriteMovies = favoriteMovieQueries.map((q) => q.data);

    return (
        <PageTemplate
            title="Favorite Movies"
            movies={favoriteMovies}
            action={(movie) => {
                return (
                    <>
                        <SiteHeader loggedIn={true} />
                        <ToggleFavourites movie={movie} />
                        <WriteReview movie={movie} />
                    </>
                );
            }}
        />
    );
};

export default FavoriteMoviesPage;
