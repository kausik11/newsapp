import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import NewsItem from './component/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pagesize={6} country={"in"} category="science" />
        
      </div>
    )
  }
}
