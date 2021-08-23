import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";
import { AuthProvider } from "../contexts/authContext";

export default {
    title: "App Header",
    component: SiteHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <AuthProvider initialEntries={["/"]}>{Story()}</AuthProvider>,
    ],
};

export const Basic = () => <SiteHeader />;

Basic.storyName = "Default";
