import React from 'react';
import '../src/style/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import GlobalStyles from './style/GlobalStyle';

import Header from '../src/components/Header';
import Home from '../src/contents/Home';
import MapView from '../src/contents/MapView';
import Partnership from '../src/contents/Partnership';
import Contact from '../src/contents/Contact';
import Subscribe from '../src/contents/Subscribe';


function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
        <Header />
        <Switch>
            <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/worldsView" component={MapView} />
            <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
