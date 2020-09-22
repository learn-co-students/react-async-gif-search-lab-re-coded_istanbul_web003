import React, { Component } from 'react';

export default class GifSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSearch} >
                <input type="text" placeholder="Type here..." onChange={this.props.onInput} />
                <button type="submit">Search</button>
            </form>
        )
    }
}