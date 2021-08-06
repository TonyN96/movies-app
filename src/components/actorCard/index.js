import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import img from "../../images/film-poster-placeholder.png";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    header: { height: 60 },
});

export default function ActorCard({ actor }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
            />
            <CardActions disableSpacing>
                <Tooltip title="More info on this actor">
                    <Link to={`/actor/${actor.id}`}>
                        <Button variant="outlined" size="medium" color="primary">
                            More Info..
                        </Button>
                    </Link>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
