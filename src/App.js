import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





export default class App extends Component {
  render() {
    return (
      <div>
       
        <Navbar />
        <News pagesize={6} country={"in"} category="General" />

        {/*  <Router> <Switch>
          <Route path="/"><News pagesize={6} country={"in"} category="General" /></Route>
          <Route path="/health"><News pagesize={6} country={"in"} category="Health" /></Route>
          <Route path="/Business"><News pagesize={6} country={"in"} category="Business" /></Route>
        </Switch> </Router>  */}
        
      </div>
    )
  }
}
