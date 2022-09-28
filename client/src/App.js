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

  const [allCards, setAllCards] = useState([])
  const [errors, setErrors] = useState(false)

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(()=>{
    fetch('/cards')
    .then(r => {
      if (r.ok){
        r.json().then(data => {
          setAllCards(data)
        })
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }, [])

  useEffect(()=>{
    fetch('/me')
    .then(r => {
      r.json().then(data => {
        setCurrentUser(data)
      })
    })
  }, [])


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
          <UserPage currentUser={currentUser} setCurrentUser={setCurrentUser} allCards={allCards}/>
        </Route>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
        <Route path="/sign_up">
          <SignUp updateUser={updateUser}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
