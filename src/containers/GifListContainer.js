import React from 'react'
import {GifList} from "../components/GifList"
import GifSearch from "../components/GifSearch"

 class GifListContainer extends React.Component {
     state = {
        gifUrls: [],
        search: ""
    }
    
    fetchOnSubmitData = ()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            // console.log(json.data.slice(0,3))
            this.setState({
                gifUrls: json.data.slice(0,3)
            })
            // console.log("state",this.state)
        })
    }
    handleChange = (e)=>{
        this.setState({
            search: e.target.value
        })
        // console.log("search", this.state.search)
    }
    
    async componentDidMount(){
        this.fetchOnSubmitData();
    };

    

    render(){
        // console.log("renderGifUrls", this.state.gifUrls)
        return (
            <div>
                <GifSearch fetchOnSubmit={this.fetchOnSubmitData} change={this.handleChange} />
                <GifList gifs={this.state.gifUrls} />
            </div>
        )
    }
     
}

export default GifListContainer 