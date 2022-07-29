import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      pageSize:20
    }
    
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df3b31e044564987b6855d6d5654757c&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });

  }

  handlePrevClick = async () =>{
    console.log("prev");

    
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df3b31e044564987b6855d6d5654757c&page=${this.state.page -1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);



    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles      
    })

  }

  handleNextClick = async () =>{
    console.log("next");
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)){        // also you can use this in next button disable = ---
        console.log("kaam ho gaya");
    }else{
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df3b31e044564987b6855d6d5654757c&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
  


    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles      
    })

  }
  }

  render() {
    return (
      <>
        <div className="container my-8 mx-auto">
          <h1 className="text-3xl font-bold">CodeMonkey - Top Headlines</h1>
          <div className="grid grid-cols-3 grid-flow-row gap-4 my-8">
            {this.state.articles.map((element) => {
              return (
                <Newsitem
                  key={element.url}
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              );
            })}
          </div>
          
            <div className="foobtn flex justify-between">
            <button
            onClick={this.handlePrevClick}
            type="button"
            className="rotate-180 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            disabled={this.state.page<=1}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Icon description</span>
          </button>

          <button
            // disabled={this.state.page<=1}
            onClick={this.handleNextClick}
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
            </div>

        </div>
      </>
    );
  }
}
