import ReviewForm from "../components/reviewForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { SampleMovie } from "./sampleData";

export default {
    title: "Movie Review Page/ReviewForm",
    component: ReviewForm,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <ReviewForm movie={SampleMovie} />;

Basic.storyName = "Default";
