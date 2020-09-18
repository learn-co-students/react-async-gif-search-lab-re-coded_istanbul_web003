import React, { Component } from 'react'

export default class GifSearch extends Component {
    state={
        searchPhrase: ""
    }

    handleChange = e => {
        this.setState({
            searchPhrase: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.handleSearch(this.state.searchPhrase);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for:
                        <input type="search" id="searchBox" name="searchBox" placeholder="search phrase" value={this.state.searchPhrase} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
