export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovie = async (args) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getGenres = async () => {
    const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
            process.env.REACT_APP_TMDB_KEY +
            "&language=en-US"
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovieReviews = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    const json = await response.json();
    return json.results;
};

export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getCredits = async (args) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getPopularActors = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getActor = async (args) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const multiSearchQuery = async (args) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { searchQuery }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getTv = async (args) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};
