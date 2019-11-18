import React from 'react';
import ParentSignUpForm from './components/SignUp/ParentSignUpForm'
import VolunteerSignUpForm from './components/SignUp/VolunteerSignUpForm'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" />
      <Route path ="/volunteer-signup-form" component={VolunteerSignUpForm}/>
      <Route path="/parent-signup-form" component={ParentSignUpForm}/>
    </div>
  )
}
 
export default App;
