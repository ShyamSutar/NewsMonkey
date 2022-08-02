import React from 'react'

const Newsitem = (props) => {



 

    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
      
 
      <div className='flex justify-center m-10 h-full'>


            <div className="max-w-sm rounded shadow-lg">
            <button type="button" className="inline-flex relative items-end w-full">
              {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
              {/* <span className="sr-only">Notifications</span> */}
              <div className="inline-flex absolute -top-2 -right-3 justify-center items-center p-2 w-fit h-8 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"><a href={newsUrl}>{source}</a></div>
            </button>
            <img className="w-full" src={!imageUrl?"https://images.wsj.net/im-591376/social":imageUrl} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                {description}...
            </p>
            <p className="text-gray-400 my-3 text-base">
                By {author?author:"Unknown"} on {new Date(date).toGMTString()}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end items-end" >
            <a  href={newsUrl} className='text-blue-500 '>Read more...</a>
            </div>
            </div>

      </div>
     

    )
  }

export default Newsitem