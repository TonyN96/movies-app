import ActorCard from "../components/actorCard";
import { SampleActor } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Actor Details Page/ActorCard",
    component: ActorCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <ActorCard actor={SampleActor} />;

Basic.storyName = "Default";
