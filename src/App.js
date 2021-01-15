import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Layout from "./Components/Layout/Layout.js";
import Header from "./Components/Header/Header.js";
import Nav from "./Components/Nav/Nav.js";
import MovieList from "./Components/MovieList/MovieList.js";

import NoMovies from "./Components/NoMovies/NoMovies.js";
import NotFound from "./Components/NotFound/NotFound.js";

export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Nav />
                        <NoMovies />
                    </Route>
                    <Route path="/films/:id">
                        <Header />
                        <Nav />
                        <MovieList />
                    </Route>
                    <Route path="/search/:id">
                        <Header />
                        <Nav />
                        <MovieList />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
}
