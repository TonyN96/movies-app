import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Tooltip } from "@material-ui/core";

const ToggleWatchlist = ({ movie }) => {
    const context = useContext(MoviesContext);

    let [watchlistStatus, setWatchlistStatus] = useState();

    const handleWatchlistToggle = (e) => {
        e.preventDefault();
        setWatchlistStatus(context.toggleWatchlist(movie));
    };
    return (
        <IconButton aria-label="Toggle Watchlist" onClick={handleWatchlistToggle}>
            {watchlistStatus ? (
                <Tooltip title="Remove from Watchlist">
                    <VisibilityOffIcon color="primary" fontSize="large" />
                </Tooltip>
            ) : (
                <Tooltip title="Add to Watchlist">
                    <VisibilityIcon color="primary" fontSize="large" />
                </Tooltip>
            )}
        </IconButton>
    );
};

export default ToggleWatchlist;
