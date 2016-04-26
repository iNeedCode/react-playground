import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

export default class App extends Component {

    render() {
        return (
            <div>
                <h2>React siasdfasdmple starter</h2>
                <BookList />
                <BookDetail />
            </div>
        );
    }
}
