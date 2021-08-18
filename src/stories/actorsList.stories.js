import ActorsList from "../components/actorsList";
import { SampleActor } from "./sampleData";
import { MemoryRouter } from "react-router";
import ToggleFavouritesIcon from "../components/cardIcons/toggleFavourites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Actors List Page/ActorList",
    component: ActorsList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    const actors = [
        { ...SampleActor, id: 1 },
        { ...SampleActor, id: 2 },
        { ...SampleActor, id: 3 },
        { ...SampleActor, id: 4 },
        { ...SampleActor, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <ActorsList actors={actors} title="Popular Actors" />
        </Grid>
    );
};
Basic.storyName = "Default";
