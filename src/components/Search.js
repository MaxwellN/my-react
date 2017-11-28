import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<form>
				<input type="text" required placeholder="Search for some pictures"/>
				<button type="submit">Search</button>
			</form>
		)
	}
}

export default Search;
