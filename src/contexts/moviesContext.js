import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie.id]);
    };
    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review });
    };

    const addToWatchlist = (movie) => {
        setWatchlist([...watchlist, movie.id]);
        console.log(watchlist);
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                watchlist,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchlist,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
