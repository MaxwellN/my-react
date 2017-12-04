import React, { Component } from 'react';
import Search from './Search';
import Favorite from './Favorite';
import ImageGallery from './ImageGallery';

import '../css/style.css';

class App extends Component {
	// constructor(){
	// 	super();
  //
		// this.seachImages = this.searchImages.bind(this);
	// }

	searchImages() {
		console.log("clicked it!!!");
	}
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="intro">This app is built with React. It allows you to search multiple image databases and save your favorites.</h1>
					<Search />
					<Favorite />
        </header>
				<div className="main">
					<ImageGallery />
				</div>
      </div>
    );
  }
}

export default App;
