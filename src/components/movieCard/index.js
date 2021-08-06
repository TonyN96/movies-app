import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import img from "../../images/film-poster-placeholder.png";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    header: { height: 60 },
});

export default function MovieCard({ movie, action }) {
    const classes = useStyles();
    const { favorites } = useContext(MoviesContext);

    if (favorites.find((id) => id === movie.id)) {
        movie.favorite = true;
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <Typography variant="h5" component="p">
                        {movie.title}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            &nbsp;{movie.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            &nbsp;{movie.vote_average}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(movie)}
                <Tooltip title="More info on this movie">
                    <Link to={`/movies/${movie.id}`}>
                        <Button variant="outlined" size="medium" color="primary">
                            More Info..
                        </Button>
                    </Link>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
