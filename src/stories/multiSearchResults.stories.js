import MultiSearchResults from "../components/multiSearchResults";
import { SampleSearchProps } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

export default {
    title: "Multi Search Page/MultiSearchResults",
    component: MultiSearchResults,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
        (Story) => <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>,
    ],
};

export const Basic = () => <MultiSearchResults props={SampleSearchProps} />;

Basic.storyName = "Default";
