import React from 'react';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <Router>
      <Navigation />
      <Banner />
      <Footer />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Switch>

      </Switch>
    </Router>
  );
};

export default App;
