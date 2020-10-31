import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
class GifListContainer extends Component {
  state = {
    data: [],
  };

  handleSearch(keyWord) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.data.slice(0, 3) }));
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch.bind(this)} />
        <GifList gifs={this.state.data} />
      </div>
    );
  }
}

export default GifListContainer;
