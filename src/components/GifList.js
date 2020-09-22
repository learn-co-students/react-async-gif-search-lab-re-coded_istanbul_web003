import React, { Component } from 'react';

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map((gif, id) => {
                    return (
                        <li key={id} >
                            <h4>{gif.title}</h4>
                            <img src={gif.images["fixed_height_small"].url} alt={gif.title} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}