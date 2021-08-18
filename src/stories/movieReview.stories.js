import MovieReview from "../components/movieReview";
import { SampleReview } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Movie Review Page/MovieReview",
    component: MovieReview,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <MovieReview review={SampleReview} />;

Basic.storyName = "Default";
