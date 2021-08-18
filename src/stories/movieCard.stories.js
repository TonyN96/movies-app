import React from "react";
import MovieCard from "../components/movieCard";
import { SampleMovie } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import ToggleFavourites from "../components/cardIcons/toggleFavourites";

export default {
    title: "Home Page/MovieCard",
    component: MovieCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <MovieCard
            movie={SampleMovie}
            action={(movie) => <ToggleFavourites movie={movie} />}
            taging={(movie) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
    return (
        <MovieCard
            movie={sampleNoPoster}
            action={(movie) => <ToggleFavourites movie={movie} />}
            taging={(movie) => null}
        />
    );
};
Exceptional.storyName = "exception";
