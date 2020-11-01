import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifData.map(gif => {
                    return <img src={gif.images.original.url}></img>
                })}
            </div>
        )
    }
}
