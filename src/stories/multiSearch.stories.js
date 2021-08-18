import MultiSearch from "../components/multiSearch";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Multi Search Page/MultiSearch",
    component: MultiSearch,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <MultiSearch />;

Basic.storyName = "Default";
