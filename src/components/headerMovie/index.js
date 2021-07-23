import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        padding: theme.spacing(2.5),
        margin: 0,
    },
    tagLine: {
        fontSize: "1.5rem",
    },
    metaDeta: {
        fontSize: "1.5rem",
        paddingLeft: "30px",
    },
}));

const MovieHeader = ({ movie, history }) => {
    const classes = useStyles();

    return (
        <Paper component="div" className={classes.root}>
            <Typography variant="h4" component="h3">
                {movie.title}
                <br />
                {movie.tagLine && <span className={classes.tagLine}>{`"${movie.tagline}"`} </span>}
            </Typography>
            <Typography className={classes.metaDeta}>
                Rating <br />
                <StarIcon />
                {movie.vote_average}/10
            </Typography>
        </Paper>
    );
};

export default withRouter(MovieHeader);
