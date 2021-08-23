import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getTv } from "../api/tmdb-api";
import { getCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import SiteHeader from "../components/siteHeader";

const TvDetailsPage = (props) => {
    const { id } = props.match.params;

    const tvResult = useQuery(["tv", { id: id }], getTv);
    const creditsResult = useQuery(["credits", { id: id }], getCredits);

    if (tvResult.isLoading || creditsResult.isLoading) {
        return <Spinner />;
    }

    if (tvResult.isError || creditsResult.isError) {
        return <h1>{tvResult.error.message}</h1>;
    }

    return (
        <>
            {tvResult.data && creditsResult.data ? (
                <>
                    <SiteHeader loggedIn={true} />
                    <PageTemplate movie={tvResult.data} credits={creditsResult.data}>
                        <MovieDetails movie={tvResult.data} credits={creditsResult.data} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for tv details</p>
            )}
        </>
    );
};

export default withRouter(TvDetailsPage);
