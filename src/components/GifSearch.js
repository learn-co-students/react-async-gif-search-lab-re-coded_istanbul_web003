import React, { Component } from "react";

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.formInput);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label for="gif">Enter name of gif:</label>
        <input
          onChange={(e) => this.setState({ formInput: e.target.value })}
          value={this.state.formInput}
          type="text"
          id="gif"
          name="gif"
        />
        <br></br>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default GifSearch;
