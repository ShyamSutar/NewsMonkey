import React, {useEffect, useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {


  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)




  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


 

  const updateNews = async () => {
    props.setProgress(10);
    const url = `${props.api}&page=${page}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(() => {

    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  

    updateNews();
  }, [])
  


  // handlePrevClick = async () => {
  //   console.log("prev");

  //   // let url =
  //   // `${props.api}&page=${this.state.page -1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);

  //   // this.setState({
  //   //   page: this.state.page-1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })

  //   this.setState({ page: this.state.page - 1 });

  //   this.updateNews();
  // };

  const fetchMoreData = async () => {
    // this.setState({page: this.state.page+1})
    // this.updateNews();


    const url = `${props.api}&page=${page+1}`;
    setPage(page+1);
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });


  };

  // handleNextClick = async () => {
  //   console.log("next");

  //   // let url =
  //   // `${props.api}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();

  //   // this.setState({
  //   //   page:this.state.page+1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })



    
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

 
    return (
      <>
     
        <div className="container my-8 mx-auto">
          {loading && <Spinner/>}
          <h1 className="text-4xl font-bold text-center">
            CodeMonkey - Top Headlines from{" "}
            {capitalizeFirstLetter(props.category)}{" "}
          </h1>
          {/* <div className="grid grid-cols-3 grid-flow-row my-8"> */}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="flex flex-wrap my-8 mx-auto justify-center">
              {articles.map((element) => {
                return (
                  <Newsitem
                    key={element.url}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                );
              })}
            </div>
          </InfiniteScroll>

          {/* </div> */}

          {/* <div className="foobtn flex justify-between m-12">
            <button
              onClick={this.handlePrevClick}
              type="button"
              className="rotate-180 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              disabled={this.state.page <= 1}
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
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pageSize)
              }
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
          </div> */}
        </div>
      </>
    );
  }

  export default News