import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifData: []
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              gifData: data
            })
          })
      }

      handleSubmit = (e) => {
        this.fetchGifs(e.target.value);
      }

    render() {
        return (
            <div>
                <GifList gifData={this.state.gifData}/>
                <GifSearch onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
