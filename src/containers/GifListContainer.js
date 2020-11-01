import React, { Component } from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

const URL = "mroBtgbfnANo2wz4Xdzy3NV6CKYwWCCz"

class GifListContainer extends Component {
  state = {
    gifs: [],
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = "leon") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=leon&api_key=mroBtgbfnANo2wz4Xdzy3NV6CKYwWCCz&rating=g`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map((gif) => ({ url: gif.images.original.url })),
        })
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer
