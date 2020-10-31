import React, { Component } from "react";

class GifList extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.gifs.map((gif) => (
          <li>
            <img width="200px" src={gif.images.original.url} />
          </li>
        ))}
      </ul>
    );
  }
}

export default GifList;
