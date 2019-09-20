import React, { Component } from 'react'
import { HandlerContext } from "./handler-context"
import { OPTIONS } from './options'

class SelectFormControl extends Component {
  
  render() {
    return (
      <div className="form-group"> 
        <label>{this.props.label}</label>
        <select name={this.props.label}
          ref="userInput"
          required
          className="form-control"
          onChange={this.context}>
          {
            OPTIONS[this.props.options].map(function(opt) {
              return <option 
                key={opt}
                value={opt}>{opt}
                </option>;
            })
          }
        </select>
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
      <label>{this.props.label}</label>
      <select name={this.props.label}
        ref="userInput"
        required
        className="form-control"
        onChange={this.context}>
        <option key='Yes' value='Yes'>Yes</option>
        <option key='No' value='No'>No</option>
      </select>
    </div>
    )
  }
}

TextFormControl.contextType = HandlerContext
SelectFormControl.contextType = HandlerContext
BooleanFormControl.contextType = HandlerContext
export { TextFormControl, SelectFormControl, BooleanFormControl }
