import Spinner from "../components/spinner";
import { MemoryRouter } from "react-router";

export default {
    title: "Misc/Spinner",
    component: Spinner,
    decorators: [(Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>],
};

export const Basic = () => <Spinner />;

Basic.storyName = "Default";
