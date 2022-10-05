import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// import './stylesheets/App.css';
import MicRecorder from 'mic-recorder-to-mp3';

import Home from './Home';
import About from './About';
import UserPage from './UserPage';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';


const Mp3Recorder = new MicRecorder({ bitRate: 128 });


function App() {

  const [allCards, setAllCards] = useState([])
  const [errors, setErrors] = useState(false)

  const [currentUser, setCurrentUser] = useState(null)

  const [allTracks, setAllTracks] = useState([])

  const history = useHistory()


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
  }, [currentUser])

  useEffect(()=>{
    fetch('/me')
    .then(r => {
      r.json().then(data => {
        setCurrentUser(data)
      })
    })
  }, [])

  useEffect(()=>{
    fetch('/tracks')
    .then(r => r.json())
    .then(data => setAllTracks(data))
  }, [])

  const updateUser = (user) => {
    return(
    //   fetch('/me')
    //   .then(r => {
    //   r.json().then(data => {
    //     setCurrentUser(data)
    //   })
    // })
      setCurrentUser(user),
      console.log("here is my current user:", currentUser)
    )}

  while (currentUser == null) {
    return(
      <div className='App'>
          <Header currentUser={currentUser} updateUser={updateUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Home allTracks={allTracks}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
        <Route path="/sign_up">
          <SignUp updateUser={updateUser}/>
        </Route>
      </Switch>
      </div>
    )
  }

  // console.log(currentUser.errors.User)
  // console.log(currentUser)

  if (currentUser.errors){
    fetch('/logout', {
      method: 'DELETE'
      })
      setCurrentUser(null)
      history.push('/login')
  }

  // console.log(currentUser)

  return (
    <div className="App">
      <Header currentUser={currentUser} updateUser={updateUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Home allTracks={allTracks}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user_page">
          <UserPage 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser} 
          allCards={allCards} 
          setAllCards={setAllCards}
          allTracks={allTracks}
          setAllTracks={setAllTracks}/>
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
