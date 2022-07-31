import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      // pageSize:20
    }
    
  }

  async updateNews(pageNo){

    const url = `${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false });

  }

  async componentDidMount() {
    // console.log("cdm");
    // let url = `${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false });

    this.updateNews();

  }

  handlePrevClick = async () =>{
    console.log("prev");

    
    // let url =
    // `${this.props.api}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);



    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,   
    //   loading: false
    // })


    this.setState({page: this.state.page - 1});

    this.updateNews();

  }

  handleNextClick = async () =>{
    console.log("next");
   
    // let url =
    // `${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();


    // this.setState({
    //   page:this.state.page+1,
    //   articles: parsedData.articles,  
    //   loading: false    
    // })

    this.setState({page: this.state.page + 1});
    this.updateNews();

  }

  render() {
    return (
      <>
        <div className="container my-8 mx-auto">
          {this.state.loading && <Spinner/>}
          <h1 className="text-4xl font-bold text-center">CodeMonkey - Top Headlines</h1>
          {/* <div className="grid grid-cols-3 grid-flow-row my-8"> */}
          <div className="flex flex-wrap my-8 mx-auto justify-center">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <Newsitem
                  key={element.url}
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              );
            })}
            </div>
          {/* </div> */}
          
            <div className="foobtn flex justify-between m-12">
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
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}
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
