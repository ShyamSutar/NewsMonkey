import './App.css';

import React, { useState } from 'react'
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

const App = () => {


  const [progress, setProgress] = useState(0);
  



 
    return (

      
      <Router>
      <>
      
      <LoadingBar
        color='#f11946'
        height={4}
        // pro={progress}
        setProgress = {progress}
        
      />
          
          <Navbar/>
        
<Routes>
        <Route exact path="/" element={<News setProgress = {setProgress}  key="general"  pageSize={20} category = "general" api = {"https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/business" element={<News setProgress = {setProgress}  key="business" pageSize={20} category = "business" api = {"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key="entertainment" pageSize={20} category = "entertainment" api = {"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/health" element={<News setProgress = {setProgress}  key="health" pageSize={20} category = "health" api = {"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/science" element={<News setProgress = {setProgress}  key="science" pageSize={20} category = "science" api = {"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/sports" element={<News setProgress = {setProgress}  key="sports" pageSize={20} category = "sports" api = {"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>
        <Route exact path="/technology" element={<News setProgress = {setProgress}  key="technology" pageSize={20} category = "technology" api = {"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df3b31e044564987b6855d6d5654757c"} />}/>

</Routes>
      </>
      </Router>
    )
  
}

export default App