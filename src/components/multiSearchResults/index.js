import { useQuery } from "react-query";
import { Link, withRouter } from "react-router-dom";
import { multiSearchQuery } from "../../api/tmdb-api";
import Spinner from "../spinner";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
    card: { padding: "10px", marginBottom: "25px" },
    media: { height: 500 },
    listItem: { padding: 0 },
    header: { color: "#3f51b5" },
    cardContent: { paddingTop: 0, paddingBottom: 0 },
    link: {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
            color: "#3f51b5",
        },
    },
});

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
    console.log(props);

    const classes = useStyles();
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
        const mediaObjects = [];
        mediaTypes[media].forEach((element) => {
            mediaObjects.push({
                title: element.title || element.name,
                url: `/${element.media_type}/${element.id}`,
            });
        });
        const result = (
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    title={
                        <Typography variant="h5" component="p">
                            {capitalizeFirstLetter(media)}{" "}
                        </Typography>
                    }
                ></CardHeader>
                <CardContent className={classes.cardContent}>
                    <List>
                        {mediaObjects.map((element) => {
                            return (
                                <ListItem key={element.id} className={classes.listItem}>
                                    <Link to={element.url} className={classes.link}>
                                        <ListItemText
                                            primary={element.title}
                                            variant="body2"
                                        ></ListItemText>
                                    </Link>
                                </ListItem>
                            );
                        })}
                    </List>
                </CardContent>
            </Card>
        );
        resultArray.push(result);
    }

    return (
        <>
            {resultArray.map((element, key) => {
                return <>{element}</>;
            })}
        </>
    );
};

export default withRouter(MultiSearchResults);
