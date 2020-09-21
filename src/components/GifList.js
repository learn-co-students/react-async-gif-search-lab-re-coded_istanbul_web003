import React, {Component} from 'react'
import GifListContainer from '../containers/GifListContainer'

export default class GifList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li><img src={this.props.gifs[0]}/></li>
                <li><img src={this.props.gifs[1]}/></li>
                <li><img src={this.props.gifs[2]}/></li>
            </ul>
        )
    }
}