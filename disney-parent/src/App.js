import React from 'react';
import Home from './components/home/Home';
import {Link, Route} from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  const handleChange = e =>{
    e.preventDefault();
    //logic here
  }

  const handleSubmit = e =>{
    e.preventDefault();
    //logic here
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul style={{listStyle: 'none', display: 'flex'}}>
          <li><Link style={{textDecoration: 'none', color: 'whitesmoke'}} to='/'>Home</Link></li>
          <li >
            <input style={{marginLeft:'2rem'}} onChange={handleChange} type='text' name='search' placeholder='Search'/>
            <button style={{marginLeft:'1rem'}} onSubmit={handleSubmit}>Search</button></li>
          <li> <Link style={{textDecoration: 'none', color: 'whitesmoke', marginLeft:'2rem'}}>Login</Link></li>
        </ul>
      </header>

      <Route exact to='/' component={Home}/>
      {/* <PrivateRoute path=''>

      </PrivateRoute> */}
    </div>
  );
}

export default App;
