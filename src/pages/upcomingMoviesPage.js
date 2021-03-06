import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ToggleWatchlistIcon from "../components/cardIcons/toggleWatchlist";
import SiteHeader from "../components/siteHeader";

const UpcomingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;

    const favorites = movies.filter((m) => m.favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    return (
        <>
            <SiteHeader loggedIn={true} />
            <PageTemplate
                title="Upcoming Movies"
                movies={movies}
                action={(movie) => {
                    return <ToggleWatchlistIcon movie={movie} />;
                }}
            />
        </>
    );
};
export default UpcomingMoviesPage;
