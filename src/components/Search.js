import React, { Component } from 'react';

class Search extends Component {

	constructor() {
		super();
		this.searchImages = this.searchImages.bind(this);
	}

	searchImages(event) {
		event.preventDefault();
		console.log(this.searchInput.value);
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
