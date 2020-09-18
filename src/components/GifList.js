import React, { Component } from 'react'

export default class GifList extends Component {
    renderImages() {
        return this.props.gifs.map(gif => (<li><img src={gif.images.original.url} /></li>))
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderImages()}
                </ul>
            </div>
        )
    }
}
