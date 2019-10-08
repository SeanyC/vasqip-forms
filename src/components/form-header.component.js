import React, { Component } from 'react'

export default class FormHeader extends Component {
  render() {
    return (
      <div className="form-header card mb-3">
        <h5 className="card-header">Patient Name</h5>
        <div className="card-body">
          <div className="row">
            <div className="col">
              Scheduled Procedure:
            </div>
            <div className="col">
              FIN:
            </div>
          </div>
          <div className="row">
            <div className="col">
              Date:
            </div>
          </div>
          <div className="row">
            <div className="col">
              Facility:
            </div>
          </div>
        </div>
      </div>
    )
  }
}