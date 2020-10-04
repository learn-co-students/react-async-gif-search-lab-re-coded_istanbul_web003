import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
class GifListContainer extends Component {
  state = {
    query: "cats",
    data: [],
  };

  handleSearch(keyWord) {
    this.setState({ query: keyWord });
  }
  componentDidMount() {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
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
