import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
 
class GifListContainer extends Component {
 
  state = {
    gifs: []
  }
  componentDidMount() {
    this.fetchGifs()
}
 
  
 
  fetchGifs() {
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.data
        })
      })
  }
  submitHandler = (searchTerm) => {
    this.fetchGifs(searchTerm)
}
render() {
    return (
        <React.Fragment>
            <GifSearch submitHandler={this.submitHandler} />
            <GifList gifs={this.state.gifs} />
        </React.Fragment>
    )
}

}
 
export default GifListContainer