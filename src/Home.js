
import React, { Component } from 'react';
import SearchContainer from "./SearchContainer"


class Home extends Component {
  render() {
    return (
      <div>
        <h1><a href="/">Movie Finder</a></h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;