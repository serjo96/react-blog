import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import '../styles/index.scss';
import Header from './containers/head/Head';
import Main from './containers/main/Main'

export default class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <BrowserRouter >
                <Main/>
            </BrowserRouter>
        </div>
    )
  }
}
