import React, { Component } from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: [],
            query: ""

        }
    }
    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=M3yEwC16oH8Onhr6FmNOSDL0kecCHWnA&limit=3&rating=g")
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    gifs: data.data

                })
                console.log(this.state.gifs)
            })
    }

    handleSearch = (e) => {
        e.preventDefault()
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=M3yEwC16oH8Onhr6FmNOSDL0kecCHWnA&q=${this.state.query}&limit=3&offset=0&rating=g&lang=en`
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    gifs: data.data

                })
            })
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            query: e.target.value
        })
    }

    render() {
        return (
            <div>
                <GifSearch onSearch={this.handleSearch} onInput={this.handleInput} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}