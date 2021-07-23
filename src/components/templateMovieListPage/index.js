import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
    alert: {
        margin: "auto",
        marginTop: "30px",
    },
});

function MovieListTemplate({ movies, title, action }) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            {displayedMovies.length > 0 ? (
                <Grid item container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <FilterCard
                            onUserInput={handleChange}
                            titleFilter={nameFilter}
                            genreFilter={genreFilter}
                        />
                    </Grid>
                    <MovieList action={action} movies={displayedMovies}></MovieList>
                </Grid>
            ) : (
                <MuiAlert className={classes.alert} severity="info">
                    You don't have any favourites added yet!
                </MuiAlert>
            )}
        </Grid>
    );
}
export default MovieListTemplate;
