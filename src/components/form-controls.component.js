import React, { Component } from 'react'
import { HandlerContext } from "./handler-context"
import { OPTIONS } from './options'

class SelectFormControl extends Component {
  
  render() {
    return (
      <div className="form-group"> 
        <label>{this.props.label}</label>
          {
            OPTIONS[this.props.options].map((opt) => {
              return <p>&emsp;<input type="radio"  name={this.props.label} value={opt} /> {opt}<br /></p>
            })
          }
      </div>
    )   
  }
}

class TextFormControl extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input type="text" className="form-control" name={this.props.label} placeholder={this.props.placeholder} onChange={this.context}></input>
      </div>
    )
  }
}

class BooleanFormControl extends Component {
  render() {
    return (
    <div className="form-group"> 
      <label>{this.props.label}</label><br />
      &emsp;<input type="radio" name={this.props.label} value="yes" checked /> Yes<br />
      &emsp;<input type="radio" name={this.props.label} value="no" checked /> No<br />
    </div>
    )
  }
}

TextFormControl.contextType = HandlerContext
SelectFormControl.contextType = HandlerContext
BooleanFormControl.contextType = HandlerContext
export { TextFormControl, SelectFormControl, BooleanFormControl }
