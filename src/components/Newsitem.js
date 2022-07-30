import React, { Component } from 'react'

export default class Newsitem extends Component {



  render() {

    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className='flex justify-center m-10'>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={!imageUrl?"https://images.wsj.net/im-591376/social":imageUrl} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                {description}...
            </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <a  href={newsUrl} className='text-blue-500 '>Read more...</a>
            </div>
            </div>

      </div>
    )
  }
}
