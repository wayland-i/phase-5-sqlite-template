import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/App.css';
import MicRecorder from 'mic-recorder-to-mp3';

import Home from './Home';
import About from './About';
import UserPage from './UserPage';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';


const Mp3Recorder = new MicRecorder({ bitRate: 512 });


function App() {

  const [currentUser, setCurrentUser] = useState("")


  const updateUser = (user) => setCurrentUser(user)


  console.log(currentUser)

  return (
    <div className="App">
      <Header currentUser={currentUser} updateUser={updateUser}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user_page">
          <UserPage currentUser={currentUser}/>
        </Route>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
