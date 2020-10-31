import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
          query: ""
        }
    }

    onChangeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchGifs(this.state.search);
    };
 
  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            value={this.state.search}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  }
}

export default GifSearch
