import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './style.css';

class SearchBar extends Component {
  state = {
    searchTerm:  ''
  } 

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSearchTermSubmit = event => {
    // to prevent the default form behaviour
    event.preventDefault();

    const { searchTerm } = this.state;
    const { onSubmit } = this.props;

    onSubmit(searchTerm);
  }

  render() { 
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSearchTermSubmit}>
          <input type="text" name="search" placeholder="Search" onChange={this.handleChange} />
          <button type="submit">
            <SearchIcon style={{ fontSize: 25 }} />
          </button>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;