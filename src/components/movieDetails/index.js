import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    overviewTitle: {
        paddingTop: "40px",
        paddingBottom: "10px",
    },
    overviewBody: {
        paddingBottom: "30px",
        fontWeight: 400,
    },
}));

const MovieDetails = ({ movie, credits }) => {
    // Don't miss this!
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    let sortedCast = credits.cast.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    sortedCast = sortedCast.slice(0, 4);

    return (
        <>
            <Typography variant="h4" component="h3" className={classes.overviewTitle}>
                Overview
            </Typography>

            <Typography variant="h6" component="p" className={classes.overviewBody}>
                {movie.overview}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Genres" className={classes.chip} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" className={classes.root}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} />
                <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count}`} />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Production Countries" className={classes.chip} color="primary" />
                </li>
                {movie.production_countries.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Cast" className={classes.chip} color="primary" />
                </li>
                {sortedCast.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>

            <Fab color="secondary" variant="extended" className={classes.fab}>
                <NavigationIcon />
                Reviews
            </Fab>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                className={classes.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews movie={movie} />
            </Drawer>
        </>
    );
};
export default MovieDetails;
