import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        images: []
    }

    fetchImages = searchFor => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${searchFor}&api_key=V20NeDVdAFwdRBc0mjDKJLLRlWZoYbv5&rating=g`;

        fetch(url)
            .then(res => res.json())
            .then(gifs => {
                this.setState({
                    images: gifs.data.slice(0, 3)
                })
            })
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.fetchImages} />
                <GifList gifs={this.state.images} />
            </div>
        )
    }
}
