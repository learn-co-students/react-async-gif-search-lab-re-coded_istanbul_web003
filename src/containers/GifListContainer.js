import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=oe6ymdk9DxtImn7OEvXrWeZEhxlMJ8zS`
    );
    const json = await response.json();
    this.setState({ data: json.data });
  }

  handleSubmit = (event, searchTerm) => {
    event.preventDefault();
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        searchTerm +
        "&api_key=oe6ymdk9DxtImn7OEvXrWeZEhxlMJ8zS"
    )
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data.data }));
  };

  mapFunction() {
    let newArr = [];
    for (let i = 0; i < 4; i++) {
      newArr.push(
        <GifList
          img={
            this.state.data[i] ? this.state.data[i].images.original.url : null
          }
        />
      );
    }

    return newArr;
  }

  render() {
    return (
      <div>
        {" "}
        <GifSearch searchGifs={this.handleSubmit} />
        {this.mapFunction()}
      </div>
    );
  }
}
export default GifListContainer;
