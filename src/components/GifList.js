import React, { Component } from "react";
// import GiftListContainer from "../containers/GifListContainer";

class GiftList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {" "}
            <img src={this.props.img} alt="img"></img>
          </li>
        </ul>
      </div>
    );
  }
}
export default GiftList;
