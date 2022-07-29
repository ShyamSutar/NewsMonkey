import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      
          
          <Navbar/>
          <News pageSize={20} api = {"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df3b31e044564987b6855d6d5654757c"} />
      
      </div>
    )
  }
}
