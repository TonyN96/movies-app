import LoginForm from "../components/loginForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { AuthProvider } from "../contexts/authContext";

export default {
    title: "Authentication Pages/LoginForm",
    component: LoginForm,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
        (Story) => <AuthProvider>{Story()}</AuthProvider>,
    ],
};

export const Basic = () => <LoginForm />;

Basic.storyName = "Default";
