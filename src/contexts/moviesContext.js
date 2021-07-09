import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    const toggleFavourite = (movie) => {
        if (favorites.indexOf(movie.id) === -1) {
            setFavorites([...favorites, movie.id]);
            return true;
        } else {
            setFavorites(favorites.filter((mId) => mId !== movie.id));
            return false;
        }
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review });
    };

    const toggleWatchlist = (movie) => {
        if (watchlist.indexOf(movie.id) === -1) {
            setWatchlist([...watchlist, movie.id]);
            return true;
        } else {
            setWatchlist(watchlist.filter((mId) => mId !== movie.id));
            return false;
        }
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                watchlist,
                toggleFavourite,
                addReview,
                toggleWatchlist,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
