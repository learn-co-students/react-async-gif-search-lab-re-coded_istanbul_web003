import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GiftListContainer extends React.Component {
   constructor() {
    super()
    this.state = {
      gifs: []
    }
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=$${query}&api_key=lCvzABdZxhclfmMYl8X9aHCy3C3DBvGF&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                console.log(data)
                 this.setState({ 
                     gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
            })
    }

  render() {
    return <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
    </div>
  }
}

export default GiftListContainer
