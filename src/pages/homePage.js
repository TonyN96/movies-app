import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import ToggleFavourites from "../components/cardIcons/toggleFavourites";
import SiteHeader from "../components/siteHeader";

const HomePage = (props) => {
    const { data, error, isLoading, isError } = useQuery("discover", getMovies);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter((m) => m.favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    return (
        <>
            <SiteHeader loggedIn={true} />
            <PageTemplate
                title="Discover Movies"
                movies={movies}
                action={(movie) => {
                    return <ToggleFavourites movie={movie} />;
                }}
            />
        </>
    );
};

export default HomePage;
