import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  render() {
    return (
      <>
        <h1 className="text-3xl font-bold">CodeMonkey - Top Headlines</h1>
        <div className="container my-3">
          <div class="grid grid-cols-3 grid-flow-row gap-4">
            <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           <div>
              <Newsitem
                title="MyTitle"
                description="losdfaj sdfj sadjf asdjf asdfj sadfjs dfj"
              />
            </div>
           
          </div>
        </div>
      </>
    );
  }
}
