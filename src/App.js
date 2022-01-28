import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Connect from './components/pages/Connect';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Portfolio' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/experience' component={Experience} />
          <Route path='/connect' component={Connect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
