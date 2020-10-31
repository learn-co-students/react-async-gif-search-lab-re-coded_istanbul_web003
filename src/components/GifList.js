import React from 'react'

class GifList extends React.Component {
  render() {
    console.log(this.props.gifs)
 
    return <div>
        {this.props.gifs.map((gif) => <img src={gif.url} key={gif.id} alt="gif" />)}
    </div>
  }
}

export default GifList
