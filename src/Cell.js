import React, { Component } from 'react';
import Matrix from "./Matrix.js"

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

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
