import { useQuery } from "react-query";
import { withRouter } from "react-router-dom";
import { multiSearchQuery } from "../../api/tmdb-api";
import Spinner from "../spinner";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";

// https://stackoverflow.com/questions/14696326/break-array-of-objects-into-separate-arrays-based-on-a-property
function groupBy(arr, property) {
    return arr.reduce(function (memo, x) {
        if (!memo[x[property]]) {
            memo[x[property]] = [];
        }
        memo[x[property]].push(x);
        return memo;
    }, {});
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const MultiSearchResults = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        ["result", { searchQuery: props.searchQuery }],
        multiSearchQuery
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const mediaTypes = groupBy(data.results, "media_type");

    let resultArray = [];

    for (let media in mediaTypes) {
        const names = [];
        mediaTypes[media].forEach((element) => {
            if (element.name) {
                names.push(element.name);
            } else if (element.title) {
                names.push(element.title);
            } else {
                names.push(element.id);
            }
        });
        const result = (
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h5" component="p">
                            {capitalizeFirstLetter(media)}{" "}
                        </Typography>
                    }
                ></CardHeader>
                <CardContent>
                    {names.map((element) => {
                        return <Typography>{element}</Typography>;
                    })}
                </CardContent>
            </Card>
        );
        resultArray.push(result);
    }

    return (
        <>
            {resultArray.map((element) => {
                return <>{element}</>;
            })}
        </>
    );
};

export default withRouter(MultiSearchResults);
