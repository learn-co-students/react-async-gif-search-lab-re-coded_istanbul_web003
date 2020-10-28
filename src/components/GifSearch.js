import React, { Component } from 'react'

export default class GifSearch extends Component {
    state= {
        searchWords:""
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchGifs(this.state.searchWords)
    }
    handlechange = (e) => {
        e => this.setState({ searchWords: e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onchange={this.handlechange} value={this.state.searchWords} type="text"></input>
                </form>
            </div>
        )
    }
}
