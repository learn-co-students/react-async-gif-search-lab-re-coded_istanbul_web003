import React from "react"

export default class GifSearch extends React.Component {
    render(){
        return(
            <div>
                <form
                onSubmit={(event) => {
                    event.preventDefault();
                    this.props.fetchOnSubmit();
                }}
                >
                <label>Search for:</label>
                <input type="text" onChange={(e)=>{this.props.change(e)}}/>
                <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}