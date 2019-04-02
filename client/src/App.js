import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            savedList: []
        };
    }

    addToSavedList = movie => {
        const savedList = this.state.savedList;
        savedList.push(movie);
        this.setState({ savedList });
    };

    //   * one route that will take an`id` parameter after`/movies/`(ex: `/movies/2`, `/movies/3` where the id is dynamic).This route should load the`Movie` component.

    render() {
        return (
            <div>
                <SavedList list={this.state.savedList} />
                <Route exact path="/" component={MovieList} />
                <Route path="/movies/:id" component={Movie} />
            </div>
        );
    }
}
