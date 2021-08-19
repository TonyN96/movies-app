import MoviesHeader from "../components/headerMovieList";
import { MemoryRouter } from "react-router";

export default {
    title: "Home Page/Header",
    component: MoviesHeader,
    decorators: [(Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>],
};

export const Basic = () => <MoviesHeader title="Discover Movies" />;

Basic.storyName = "Default";
