import React, { Component } from 'react';
import Matrix from "./Matrix.js"

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  //on click we run the function pointed to by the onClick prop which is handleClick
  //in handle click we INVOKE the getSelectedColor function which is defined in Matrix.js
  // extra handleClick isnt an anonymous function its in essence handleClick(params) if it
  // were to be run some where else.
  handleClick = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
  }




  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
      </div>
    )
  }

}
