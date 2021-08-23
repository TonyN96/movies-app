import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvPage from "./pages/tvDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchlistPage from "./pages/watchlistPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import ActorsListPage from "./pages/actorsListPage";
import MultiSearchPage from "./pages/multiSearchPage";
import { AuthProvider } from "./contexts/authContext";
import PrivateRoute from "./privateRoute";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <MoviesContextProvider>
                        <Switch>
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignupPage} />
                            <PrivateRoute exact path="/home" component={HomePage} />
                            <PrivateRoute exact path="/logout" component={LoginPage} />
                            <PrivateRoute
                                exact
                                path="/reviews/form"
                                component={AddMovieReviewPage}
                            />
                            <PrivateRoute
                                exact
                                path="/movies/upcoming"
                                component={UpcomingMoviesPage}
                            />
                            <PrivateRoute
                                exact
                                path="/movies/watchlist"
                                component={WatchlistPage}
                            />
                            <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                            <PrivateRoute
                                exact
                                path="/movies/favorites"
                                component={FavoriteMoviesPage}
                            />
                            <PrivateRoute path="/movie/:id" component={MoviePage} />
                            <PrivateRoute path="/tv/:id" component={TvPage} />
                            <PrivateRoute path="/actors/" component={ActorsListPage} />
                            <PrivateRoute path="/person/:id" component={ActorDetailsPage} />
                            <PrivateRoute path="/search" component={MultiSearchPage} />
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </MoviesContextProvider>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
