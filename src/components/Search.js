import React, { Component } from 'react';
import { config } from '../keys.js'

class Search extends Component {

	constructor() {
		super();
		this.searchImages = this.searchImages.bind(this);
	}

	// componentDidMount() {
  //
	// }
	searchImages(event) {
		event.preventDefault();
		fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&per_page=80&api_key=' +  config.apiKey + '&tags=' + this.searchInput.value)
		.then((response) => response.json())
		.catch((error) => {
			console.log(`Fetch failed ${error}`);
		})
	}

	render() {
		return (
			<form className="search" onSubmit={this.searchImages}>
				<input className="search__text" type="text" required placeholder="Search for some pictures" ref={(input) => { this.searchInput = input}}/>
				<button className="search__button" type="submit">Search</button>
			</form>
		)
	}
}



export default Search;
