import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {


  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }


  render() {
    return (

      
      <Router>
      <>
      
      <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        
      />
          
          <Navbar/>
        
<Routes>
        <Route exact path="/" element={<News setProgress = {this.setProgress}  key="general"  pageSize={20} category = "general" api = {"https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/business" element={<News setProgress = {this.setProgress}  key="business" pageSize={20} category = "business" api = {"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/entertainment" element={<News setProgress = {this.setProgress}  key="entertainment" pageSize={20} category = "entertainment" api = {"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/health" element={<News setProgress = {this.setProgress}  key="health" pageSize={20} category = "health" api = {"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/science" element={<News setProgress = {this.setProgress}  key="science" pageSize={20} category = "science" api = {"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/sports" element={<News setProgress = {this.setProgress}  key="sports" pageSize={20} category = "sports" api = {"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/technology" element={<News setProgress = {this.setProgress}  key="technology" pageSize={20} category = "technology" api = {"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>

</Routes>
      </>
      </Router>
    )
  }
}
