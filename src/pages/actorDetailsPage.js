import React from "react";
import { withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import SiteHeader from "../components/siteHeader";

const ActorDetailsPage = (props) => {
    const { id } = props.match.params;

    const result = useQuery(["actor", { id: id }], getActor);

    if (result.isLoading) {
        return <Spinner />;
    }

    if (result.isError) {
        return <h1>{result.error.message}</h1>;
    }

    return (
        <>
            {result.data ? (
                <>
                    <SiteHeader loggedIn={true} />
                    <ActorDetails actor={result.data} />
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default withRouter(ActorDetailsPage);
