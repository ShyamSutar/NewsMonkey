import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {

 
  constructor(){
    super();
    console.log("Hello I am a constructor from News component"); 
    this.state = {
      articles : [],
      loading : false

    }    
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df3b31e044564987b6855d6d5654757c";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <>
        <div className="container my-8 mx-auto">
        <h1 className="text-3xl font-bold">CodeMonkey - Top Headlines</h1>
          <div className="grid grid-cols-3 grid-flow-row gap-4 my-8">
            
        {this.state.articles.map((element)=>{
          return <Newsitem
                key={element.url}
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageUrl = {element.urlToImage}
                newsUrl = {element.url}
/>
        })}

              
           
          </div>
        </div>
      </>
    );
  }
}
