import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/App.css';
import MicRecorder from 'mic-recorder-to-mp3';

import Home from './Home';
import About from './About';
import UserPage from './UserPage';
import Header from './Header';


const Mp3Recorder = new MicRecorder({ bitRate: 512 });


function App() {



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user_page">
          <UserPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
