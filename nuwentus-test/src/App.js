import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Cato from './categories.js'
import Allsongs from './playlists';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/categories" component={Cato} />
        <Route path="/playlists" component={Allsongs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
