import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { getCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import SiteHeader from "../components/siteHeader";

const MovieDetailsPage = (props) => {
    const { id } = props.match.params;

    const movieResult = useQuery(["movie", { id: id }], getMovie);
    const creditsResult = useQuery(["credits", { id: id }], getCredits);

    if (movieResult.isLoading || creditsResult.isLoading) {
        return <Spinner />;
    }

    if (movieResult.isError) {
        return <h1>{movieResult.error.message}</h1>;
    } else if (creditsResult.isError) {
        return <h1>{creditsResult.error.message}</h1>;
    }

    return (
        <>
            {movieResult.data && creditsResult.data ? (
                <>
                    <SiteHeader loggedIn={true} />
                    <PageTemplate movie={movieResult.data} credits={creditsResult.data}>
                        <MovieDetails movie={movieResult.data} credits={creditsResult.data} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default withRouter(MovieDetailsPage);
