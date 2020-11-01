import React, { Component } from "react";

export default class GifSearch extends Component {

       state = {
            search: ""
        }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchAllGifs(this.state.search);
  };

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Gifs</label>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}