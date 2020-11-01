import React, {Component} from "react";
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

//should be a container that does data fetching and 
//then renders its corresponding sub-component.
const GIPHY_API_KEY = "D1RgdpOVewekctGA9Lr9WfUMDq1Zaggx";
const QUERY = "rickandmorty";
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${QUERY}&limit=25&offset=0&rating=g&lang=en`;


class GifListContainer extends Component {
  state={
    gifs:[]
  }

  fetchGifs=(search)=>{
    fetch(URL)
    .then(response=> response.json())
    .then(({data})=>{
      this.setState({
        gifs: data.map((gif) => ({ url: gif.images.fixed_height.url })),
      });
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