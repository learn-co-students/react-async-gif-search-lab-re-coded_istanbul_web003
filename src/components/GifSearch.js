import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    search: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchGIFs(this.state.search);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Gifs</label>
          <input
            type="text"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
