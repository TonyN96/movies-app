import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import ActorCard from "../actorCard/index.js";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
    alert: {
        margin: "auto",
        marginTop: "30px",
    },
});

function ActorsList({ actors, title }) {
    const classes = useStyles();

    let sortedActors = actors.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));

    let actorCards = sortedActors.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ActorCard key={m.id} actor={m} />
        </Grid>
    ));

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>

            {actors.length > 0 ? (
                <Grid item container spacing={5}>
                    {actorCards}
                </Grid>
            ) : (
                <MuiAlert className={classes.alert} severity="info">
                    No actors found..
                </MuiAlert>
            )}
        </Grid>
    );
}
export default ActorsList;
