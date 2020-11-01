import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.allGifs.map(gif => {
                    return <img src={gif.images.original.url}></img> })}
            </div>
        )
    }
}
