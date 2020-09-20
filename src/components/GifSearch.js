import React from "react";

class GifSearch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gifs: [],
      searchTerm: "",
    };
  }

  handleSearchInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) =>
            this.props.searchGifs(event, this.state.searchTerm)
          }
        >
          <label>Search Gifs</label>
          <input type="text" onChange={this.handleSearchInput}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default GifSearch;
