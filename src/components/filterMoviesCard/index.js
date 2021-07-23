import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        backgroundColor: "#f50057",
        padding: "8px",
    },
    media: { height: 300 },
    header: {
        lineHeight: "1.5px",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        width: "90%",
        backgroundColor: "rgb(255, 255, 255)",
    },
    select: {
        padding: "10px",
    },
}));

export default function FilterMoviesCard(props) {
    const classes = useStyles();
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    genres.unshift({ id: "0", name: "All" });

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <Box display="flex" alignItems="center">
                        <SearchIcon fontSize="large" />
                        <Typography variant="h5" component="p">
                            Filter the movies
                        </Typography>
                    </Box>
                }
            />
            <CardContent>
                <TextField
                    className={classes.formControl}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    value={props.titleFilter}
                    variant="filled"
                    onChange={handleTextChange}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="genre-label" className={classes.select}>
                        Genre
                    </InputLabel>
                    <Select
                        className={classes.select}
                        labelId="genre-label"
                        id="genre-select"
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    );
}
