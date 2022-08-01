import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <>
      
          
          <Navbar/>

<Routes>
        <Route exact path="/" element={<News key="general"  pageSize={20} category = "general" api = {"https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/business" element={<News key="business" pageSize={20} category = "business" api = {"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} category = "entertainment" api = {"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/health" element={<News key="health" pageSize={20} category = "health" api = {"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/science" element={<News key="science" pageSize={20} category = "science" api = {"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={20} category = "sports" api = {"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/technology" element={<News key="technology" pageSize={20} category = "technology" api = {"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>

</Routes>
      </>
      </Router>
    )
  }
}
