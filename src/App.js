import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './HOCs/Layout/Layout.js';
import Header from './Components/MovieDetails/Header/Header.js';
import Nav from './Components/Nav/Nav.js';
import MovieList from './Components/MovieList/MovieList.js';
import NoMovies from './Components/NoMovies/NoMovies.js';
import NotFound from './Components/NotFound/NotFound.js';

import './App.scss';

export default function App() {
    const movies = useSelector((state) => state.movies);
    const noMovies = movies.length === 0;

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Nav />
                        {noMovies ? <NoMovies /> : <MovieList />}
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
