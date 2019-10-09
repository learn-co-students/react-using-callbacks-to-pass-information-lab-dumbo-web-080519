import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#F00"
    }
  }

  changeColor = (str) => {
    this.setState({
      selectedColor: str
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  //gets selected from either my this.State or changeColor


//getSelectedColor is a prop which points to the getSelectedColor function in this class
//this doesnt invoke it.
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor}  />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
