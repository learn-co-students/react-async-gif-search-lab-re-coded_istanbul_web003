import React from "react"

export default class GifSearch extends React.Component {
    render(){
        return(
            

            <div>
                {/* <input type="text" onChange={this.props.handleSearch}></input>
                <button type="submit" onClick={this.props.fetchOnSubmitData}>Search</button> */}
                
                <form
                onSubmit={(event) => {
                    event.preventDefault();
                    
                    this.props.fetchOnSubmit();
                }}
                >
                <label>write something:</label>
                <input type="text" onChange={(e)=>{this.props.change(e)}}/>
                <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}