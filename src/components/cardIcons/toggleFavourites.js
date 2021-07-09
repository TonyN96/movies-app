import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Tooltip } from "@material-ui/core";

const ToggleFavourites = ({ movie }) => {
    const context = useContext(MoviesContext);

    let [favouriteStatus, setFavouriteStatus] = useState();

    const handleFavouritesToggle = (e) => {
        e.preventDefault();
        setFavouriteStatus(context.toggleFavourite(movie));
    };
    return (
        <Tooltip title="Toggle Favourite">
            <IconButton aria-label="Add to favorites" onClick={handleFavouritesToggle}>
                {favouriteStatus ? (
                    <FavoriteIcon color="primary" fontSize="large" />
                ) : (
                    <FavoriteBorderIcon color="primary" fontSize="large" />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ToggleFavourites;
