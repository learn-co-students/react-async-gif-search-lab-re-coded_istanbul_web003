import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        inputValue: ""
    }

    submitFunction = (e) => {
        e.preventDefault()
        this.props.submit(this.state.inputValue)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>
                    Search!
                    <input type="text" value = {this.state.inputValue} onChange={e => this.setState({inputValue: e.target.value})}></input>
                </form>
            </div>
        )
    }
}
