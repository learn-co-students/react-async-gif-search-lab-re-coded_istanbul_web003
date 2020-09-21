import React, {Component} from 'react'
import GifList from '../components/GifList'

export default class GiftListContainer extends Component {
    constructor() {
        super()
        this.state ={
            gifs: []
        }
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g")
        .then( response => response.json())
        .then(data => 
            this.setState({gifs: data.data.slice(0,4).map(gif => gif.images.original.url)}))
    }

    render(){
        return (
        <GifList gifs = {this.state.gifs} />
        )
    }
}