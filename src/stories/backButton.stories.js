import BackButton from "../components/backButton";
import { MemoryRouter } from "react-router";

export default {
    title: "Misc/BackButton",
    component: BackButton,
    decorators: [(Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>],
};

export const Basic = () => <BackButton />;

Basic.storyName = "Default";
