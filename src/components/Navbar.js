import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="3KxWflJe_c9h2mTSoYSAaa" cx="29.979" cy="36.5" r="32.704" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#efdcb1"/><stop offset="0" stopColor="#f2e0bb"/><stop offset=".011" stopColor="#f2e0bc"/><stop offset=".362" stopColor="#f9edd2"/><stop offset=".699" stopColor="#fef4df"/><stop offset="1" stopColor="#fff7e4"/></radialGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAaa)" d="M58,20h-4.893c-0.996,0-1.92-0.681-2.08-1.664C50.824,17.083,51.785,16,53,16h0.83 c1.624,0,3.081-1.216,3.166-2.839C57.086,11.431,55.71,10,54,10H43h-8h-7v1h-9.852c-1.582,0-3.003,1.162-3.137,2.738 c-0.151,1.779,1.252,3.27,3.002,3.262c0.736-0.003,1.452,0.23,1.987,0.687V21h-7.302c-1.895,0-3.594,1.419-3.693,3.312 c-0.103,1.966,1.42,3.588,3.343,3.672C12.908,29.171,14.101,30,15.5,30h4.411c0.03,0,0.059,0.006,0.089,0.007v4.002 c-0.84,0.057-1.62,0.42-2.176,0.991H11c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h0.5c1.381,0,2.5,1.119,2.5,2.5 c0,1.381-1.119,2.5-2.5,2.5H5.17c-1.625,0-3.081,1.216-3.166,2.839C1.914,49.569,3.29,51,5,51h4.893c0.996,0,1.92,0.681,2.08,1.664 C12.176,53.917,11.215,55,10,55H9.17c-1.625,0-3.081,1.216-3.166,2.839C5.914,59.569,7.29,61,9,61h35.852 c1.582,0,3.003-1.162,3.137-2.738c0.151-1.779-1.252-3.27-3.002-3.262c-0.883,0.004-1.728-0.34-2.271-1H43v-4h7.302 c1.895,0,3.594-1.419,3.693-3.312C54.101,44.67,52.495,43,50.5,43h-0.208c-0.639-1.125-1.651-2-2.792-2h-4.411 c-0.03,0-0.059-0.006-0.089-0.007v-4.001c0.84-0.057,1.62-0.42,2.176-0.991H52c1.381,0,2.5-1.119,2.5-2.5c0-1.381-1.119-2.5-2.5-2.5 h-0.5c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5h6.33c1.624,0,3.081-1.216,3.166-2.839C61.086,21.431,59.71,20,58,20z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAab" x1="29.5" x2="29.5" y1="57" y2="9.812" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#4bcaee"/><stop offset=".539" stopColor="#56cdf0"/><stop offset="1" stopColor="#64d0f3"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAab)" d="M53,57H16c-5.523,0-10-4.477-10-10V11c0-1.657,1.343-3,3-3h32c1.657,0,3,1.343,3,3v37 C44,52.971,48.029,57,53,57L53,57z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAac" x1="52.5" x2="52.5" y1="28.38" y2="57.38" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#30c3ea"/><stop offset=".169" stopColor="#2bbce7"/><stop offset=".406" stopColor="#1eaadf"/><stop offset=".479" stopColor="#19a3dc"/><stop offset="1" stopColor="#18a1db"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAac)" d="M52.5,57L52.5,57c-4.694,0-8.5-3.805-8.5-8.5V28h14c1.657,0,3,1.343,3,3v17.5 C61,53.195,57.194,57,52.5,57z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAad" x1="53.99" x2="53.99" y1="29.189" y2="50.816" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#38caed"/><stop offset=".627" stopColor="#26b3e3"/><stop offset=".996" stopColor="#1aa3dc"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAad)" d="M54.973,30.336C54.813,31.319,53.889,32,52.893,32h-1.786c-0.996,0-1.92,0.681-2.08,1.664 C48.824,34.917,49.785,36,51,36h1.5c0.828,0,1.5,0.672,1.5,1.5S53.328,39,52.5,39l-2.877,0c-1.308,0-2.499,0.941-2.63,2.242 C46.844,42.739,48.015,44,49.48,44h6.02c0.828,0,1.5,0.672,1.5,1.5S56.328,47,55.5,47h-1.393c-0.996,0-1.92,0.681-2.08,1.664 C51.824,49.917,52.785,51,54,51h6.625C60.868,50.209,61,49.37,61,48.5V31c0-1.657-1.343-3-3-3h-5 C54.215,28,55.176,29.083,54.973,30.336z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAae" x1="32.25" x2="32.25" y1="36.984" y2="57.984" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#40c8ee"/><stop offset="1" stopColor="#2dbae8"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAae)" d="M12,38.5L12,38.5c0,1.381,1.119,2.5,2.5,2.5H18c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2h-2 c-1.105,0-2,0.895-2,2v0c0,1.105,0.895,2,2,2h7c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2h-2c-1.105,0-2,0.895-2,2v0 c0,1.105,0.895,2,2,2h31.5h0c-4.694,0-8.5-3.805-8.5-8.5V36H14.5C13.119,36,12,37.119,12,38.5z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAaf" x1="15" x2="15" y1="23" y2="8" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#7ad9f6"/><stop offset="1" stopColor="#85dbf8"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAaf)" d="M14,19l1.893,0c0.996,0,1.92-0.681,2.08-1.664C18.176,16.083,17.215,15,16,15h-1.5 c-0.828,0-1.5-0.672-1.5-1.5v0c0-0.828,0.672-1.5,1.5-1.5H22c1.215,0,2.176-1.083,1.973-2.336C23.813,8.681,22.889,8,21.893,8L9,8 c-1.657,0-3,1.343-3,3v12l9.893,0c0.996,0,1.92-0.681,2.08-1.664C18.176,20.083,17.215,19,16,19H14L14,19z"/><linearGradient id="3KxWflJe_c9h2mTSoYSAag" x1="25" x2="25" y1="33.542" y2="11.977" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset=".018" stopColor="#fff8e5"/><stop offset="1" stopColor="#fffef8"/></linearGradient><path fill="url(#3KxWflJe_c9h2mTSoYSAag)" d="M36,27H14c-1.105,0-2-0.895-2-2v-7c0-1.105,0.895-2,2-2h22c1.105,0,2,0.895,2,2v7 C38,26.105,37.105,27,36,27z"/><g><path fill="#fff" d="M27 36H14c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C29 35.105 28.105 36 27 36zM36 36h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C38 35.105 37.105 36 36 36zM16 50h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C18 49.105 17.105 50 16 50zM36 50H23c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C38 49.105 37.105 50 36 50zM20 43h-6c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v0C22 42.105 21.105 43 20 43zM36 43h-9c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h9c1.105 0 2 .895 2 2v0C38 42.105 37.105 43 36 43z"/></g></svg>
              <span className="ml-3 text-xl">NewsMonkey</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
              <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
              <Link className="mr-5 hover:text-gray-900" to="/business">Business</Link>
              <Link className="mr-5 hover:text-gray-900" to="/entertainment">Entertainment</Link>
              <Link className="mr-5 hover:text-gray-900" to="/health">Health</Link>
              <Link className="mr-5 hover:text-gray-900" to="/science">Science</Link>
              <Link className="mr-5 hover:text-gray-900" to="/sports">Sports</Link>
              <Link className="mr-5 hover:text-gray-900" to="/technology">Technology</Link>
              
            </nav>
            {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
        </header>
      </div>
    );
  }
}
