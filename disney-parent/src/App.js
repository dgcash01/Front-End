import React from 'react';
import Home from './components/home/Home';
import {Link, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul style={{listStyle: 'none', display: 'flex'}}>
          <li><Link>Home</Link></li>
          <li><Link>Search</Link></li>
          <li><Link>Login</Link></li>
        </ul>
      </header>

      <Route to='/' component={Home}/>
    </div>
  );
}

export default App;
