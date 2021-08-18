import SignupForm from "../components/signupForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Authentication Pages/SignupForm",
    component: SignupForm,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => <SignupForm />;

Basic.storyName = "Default";
