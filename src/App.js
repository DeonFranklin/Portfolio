import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Connect from './components/pages/Connect';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/Projects' component={Projects} />
          <Route path='/connect' component={Connect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
