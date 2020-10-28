import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from "../components/GifList";


export default class GifListContainer extends Component {
    stata = {
        gifsArr: [],
        searchGifs: ''
    }
    fetchingGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchGifs}&api_key=1ujl9rFloT3MBesi8d5esY8S9tKuz2g6&rating=g`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    gifsArr: json.data.slice(0, 3)
                })
            })
    }
    searvHandle = (input) => {
        this.setState({
            searchGifs: input.target.value
        })
    }
    componentDidMount() {
        this.fetchingGif()
    }
    render() {
        return (
            <div>
                <GifSearch searchGifs={this.fetchingGif} searvHandle={this.searvHandle} />
                <GifList gifsArr={this.state.gifsArr} />
            </div>
        )
    }
}
