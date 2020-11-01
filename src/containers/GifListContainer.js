import React, {Component} from "react";
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

//should be a container that does data fetching and 
//then renders its corresponding sub-component.
const GIPHY_API_KEY = "D1RgdpOVewekctGA9Lr9WfUMDq1Zaggx";
const URL =
  "https://api.api.giphy.com/v1/gifs/search?q=${}&rating=g" +
  `api-key=${GIPHY_API_KEY}`;

https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g


class GifListContainer extends Component {
  state={
    gifs:[]
  }

  fetchGifs=(search)=>{
    fetch('https://api.giphy.com/v1/gifs/search?q=${search}&api_key=D1RgdpOVewekctGA9Lr9WfUMDq1Zaggx=g')
    .then(response=> response.json())
    .then(({data})=>{
      this.setState({gifs:data.map(gif=>({url:gif.images.original.url}))})
    })
  }

  componentDidMount(){
    this.fetchGifs()
  }

render(){
  return (
    <div>
    <GifSearch fetchGifs={this.fetchGifs} />
    <GifList gifs={this.state.gifs} />
    </div>
  )
}
};

export default GifListContainer;