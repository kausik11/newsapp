import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './component/NewsItem';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




export default class App extends Component {

  state = {
    progress : 0}
  
  setProgress= (value)=>{
    this.setState({progress : value})
  }

  render() {
    return (
      <div>
       
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <News pagesize={6} country={"in"} category="General" bar = {this.setProgress}/>

        {/*  <Router> <Switch>
          <Route path="/"><News pagesize={6} country={"in"} category="General" /></Route>
          <Route path="/health"><News pagesize={6} country={"in"} category="Health" /></Route>
          <Route path="/Business"><News pagesize={6} country={"in"} category="Business" /></Route>
        </Switch> </Router>  */}
        
      </div>
    )
  }
}
