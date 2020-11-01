  
import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    
        state = {
            allGifs: []
        }
    
    fetchAllGifs = (search ) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(res => res.json())
          .then(({data}) => {
              console.log(data);
                this.setState({ allGifs: data.slice(0, 3)})
          })
      }
    
    

    render() {
      return(
        <div>
          <GifSearch fetchAllGifs={this.fetchAllGifs} />
          <GifList allGifs={this.state.allGifs} />
        </div>
      )
    }
  
    
}


