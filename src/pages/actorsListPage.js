import ActorsList from "../components/actorsList";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularActors } from "../api/tmdb-api";
import SiteHeader from "../components/siteHeader";

const ActorsListPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("actors", getPopularActors);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const actors = data.results;

    return (
        <>
            <SiteHeader loggedIn={true} />
            <ActorsList title="Popular Actors" actors={actors} />
        </>
    );
};

export default ActorsListPage;
