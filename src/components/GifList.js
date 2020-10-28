import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => {
                    return <li key={gif.id}><img src={gif.gifs.original.url} alt={gif.id}></img></li>
                }).slice(0, 3)}
            </ul>
        )
    }
}
