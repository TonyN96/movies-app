import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
    Container,
    List,
    Link,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Box,
} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import WcIcon from "@material-ui/icons/Wc";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import TheatersIcon from "@material-ui/icons/Theaters";
import BackButton from "../backButton";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: theme.spacing(1.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    biographyTitle: {
        marginBottom: "20px",
    },
    biographyBody: {
        paddingBottom: "30px",
        fontWeight: 400,
    },
    backButton: {
        marginTop: "30px",
    },
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "50px",
        paddingBottom: "50px",
    },
    actorTitleBox: {
        marginTop: "20px",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

const ActorDetails = ({ actor, history }) => {
    const classes = useStyles();

    return (
        <Container>
            <div style={{ width: "100%" }}>
                <Box display="flex" className={classes.actorTitleBox}>
                    <BackButton history={history} />
                    <Typography variant="h4" component="h3">
                        {actor.name}
                    </Typography>
                    <Box></Box>
                </Box>
            </div>
            <List className={classes.flexContainer}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CakeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${actor.birthday}`} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WcIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${actor.gender}` === "1" ? "Female" : "Male"} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocationOnIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${actor.place_of_birth}`} />
                </ListItem>
                {actor.imdb_id ? (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <TheatersIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link
                            rel="noopener"
                            target="_blank"
                            href={`https://www.imdb.com/name/${actor.imdb_id}/`}
                            color="inherit"
                        >
                            <ListItemText primary="IMDb Profile"></ListItemText>
                        </Link>
                    </ListItem>
                ) : (
                    <></>
                )}
                {actor.homepage ? (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LanguageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link
                            rel={"external"}
                            target="_blank"
                            href={`${actor.homepage}`}
                            color="inherit"
                        >
                            <ListItemText primary={`${actor.homepage}`}></ListItemText>
                        </Link>
                    </ListItem>
                ) : (
                    <></>
                )}
            </List>
            <Box display="flex" justifyContent="space-between">
                <Box marginRight="50px">
                    <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt="actor" />
                </Box>
                <Box>
                    <Typography variant="h4" component="h3" className={classes.biographyTitle}>
                        Biography
                    </Typography>
                    <Typography variant="h6" component="p" className={classes.biographyBody}>
                        {actor.biography}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
export default withRouter(ActorDetails);
