import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
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
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <MoviesContextProvider>
                    <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/logout" component={LoginPage} />
                        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                        <Route exact path="/movies/watchlist" component={WatchlistPage} />
                        <Route path="/reviews/:id" component={MovieReviewPage} />
                        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                        <Route path="/movies/:id" component={MoviePage} />
                        <Route path="/actors/" component={ActorsListPage} />
                        <Route path="/actor/:id" component={ActorDetailsPage} />
                        <Route path="/search" component={MultiSearchPage} />
                        <Route exact path="/" component={LoginPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
