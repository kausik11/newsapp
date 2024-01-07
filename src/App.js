import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
// import NewsItem from './component/NewsItem';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App () {

  const[progress, willsetProgress ] = useState(0);

 
 

  const setProgress = (value)=>{
    return(
      willsetProgress(value)
    )
    
};

 
    return (
      <div>
       
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <News pagesize={6} country={"in"} category="General" bar = {setProgress}/>

        {/*  <Router> <Switch>
          <Route path="/"><News pagesize={6} country={"in"} category="General" /></Route>
          <Route path="/health"><News pagesize={6} country={"in"} category="Health" /></Route>
          <Route path="/Business"><News pagesize={6} country={"in"} category="Business" /></Route>
        </Switch> </Router>  */}
        
      </div>
    )
  
}
export default App;