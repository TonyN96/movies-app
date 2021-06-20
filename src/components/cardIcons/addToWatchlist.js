import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import WatchlistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToPlaylist = (e) => {
        e.preventDefault();
        context.addToFavorites(movie);
    };
    return (
        <IconButton aria-label="add to watchlist" onClick={handleAddToPlaylist}>
            <WatchlistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchlistIcon;
