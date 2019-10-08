import React, { Component } from 'react'
import axios from 'axios'

import { HandlerContext } from "./handler-context"
import { TextFormControl, SelectFormControl, BooleanFormControl } from "./form-controls.component"
import FormHeader from "./form-header.component"

export default class NonCardiacForm extends Component {
  constructor(props) {
    super(props)

    this.formGroups = []
    this.formData = {}
    // this.formChildren = this.formData.map(formGroup => formGroup.children[1])

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeFormData = this.onChangeFormData.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      date: new Date(),
      caseNumber: ''
    }
  }

  

  // componentDidMount should prefill the form if the page is
  // accessed by clicking a case.

  // componentDidMount() {
  //   axios.get('http://localhost:5050/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeFormData(e) {
    console.dir(this.formGroups)
    console.dir(this.formData)
  }

  onSubmit(e) {
    e.preventDefault();

    let formGroups = [...document.getElementsByClassName('form-group')]
    
    let dataEntry = {
      username: this.state.username,
      date: this.state.date,
      formData: {}
    }

    formGroups.map((formGroup) => {
      dataEntry.formData[formGroup.children[1].name] = formGroup.children[1].value
    })

    console.log(dataEntry);

    // axios.post('http://localhost:5050/data-entry/add', dataEntry)
    //   .then(res => console.log(res.data));

    // window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>VASQIP Non-Cardiac Data Form</h3>
      <FormHeader />
      <form onSubmit={this.onSubmit}>
        <HandlerContext.Provider value={ this.onChangeFormData }>
          <div className="row">
            <div className="col">
              <div className="card mb-3">
                <h5 className="card-header">General</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <TextFormControl label="Height" type="text" placeholder="in inches" />
                    </div>
                    <div className="col">
                      <TextFormControl label="Weight" type="text" placeholder="in lbs" />
                    </div>
                  </div>
                  <SelectFormControl label="DM long-term" type="select" options="diabetes" />
                  <SelectFormControl label="Diabetes 2 wks pre-op" type="select" options="diabetes" />
                  <SelectFormControl label="Tobacco use" type="select" options="tobacco" />
                  <SelectFormControl label="Tobacco timeframe" type="select" options="tobaccoTime" />
                  <BooleanFormControl label="ETOH &gt; 2 drinks w/in 2 wks" type="boolean" />
                  <SelectFormControl label="Positive drug screening" type="select" options="drugScreening" />
                  <SelectFormControl label="Dyspnea" type="select" options="dyspnea" />
                  <SelectFormControl label="Sleep apnea" type="select" options="sleepApnea" />
                  <SelectFormControl label="Sleep apnea - compliance" type="select" options="sleepApneaCompliance" />
                </div>
              </div>
              <div className="card mb-3">
                <h5 className="card-header">Pulmonary, Hepatobiliary, GI</h5>
                <div className="card-body">
                  <BooleanFormControl label="Vent dependent w/in 48 hrs pre-op" type="boolean" />
                  <BooleanFormControl label="Severe COPD" type="boolean" />
                  <BooleanFormControl label="Current pneumonia" type="boolean" />
                  <BooleanFormControl label="Ascites" type="boolean" />
                  <BooleanFormControl label="Esophageal varices" type="boolean" />
                </div>
              </div>
              <div className="card mb-3">
                <h5 className="card-header">Cardiac</h5>
                <div className="card-body">
                  <SelectFormControl label="CHF" type="select" options="chf" />
                  <SelectFormControl label="Prior MI" type="select" options="priorMi" />
                  <SelectFormControl label="PCI" type="select" options="pci" />
                  <SelectFormControl label="Prior heart surgery" type="select" options="priorHeartSurgery" />
                  <SelectFormControl label="Angina Severity" type="select" options="anginaSeverity" />
                  <SelectFormControl label="Angina timeframe" type="select" options="anginaTimeframe" />
                  <SelectFormControl label="Hypertension" type="select" options="hypertension" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <h5 className="card-header">Vascular</h5>
                <div className="card-body">
                  <SelectFormControl label="PAD" type="select" options="pad" />
                  <BooleanFormControl label="Rest pain / gangrene" type="boolean" />
                </div>
              </div>
              <div className="card mb-3">
                <h5 className="card-header">Renal</h5>
                <div className="card-body">
                  <BooleanFormControl label="ARF" type="boolean" />
                  <BooleanFormControl label="Dialysis - requires or is on" type="boolean" />
                </div>
              </div>
              <div className="card mb-3">
                <h5 className="card-header">CNS</h5>
                <div className="card-body">
                  <BooleanFormControl label="Impaired sensorium" type="boolean" />
                  <BooleanFormControl label="Coma" type="boolean" />
                  <BooleanFormControl label="Hemiplegia/hemiparesis" type="boolean" />
                  <SelectFormControl label="Carotid artery obstruction" type="select" options="carotidObstruction" />
                  <SelectFormControl label="Hx of CVD events" type="select" options="hxOfCvd" />
                  <BooleanFormControl label="Tumor involving CNS" type="boolean" />
                  <SelectFormControl label="Impaired cognitive function" type="select" options="impairedCog" />
                </div>
              </div>
              <div className="card mb-3">
                <h5 className="card-header">Nutritional/Immune,Other</h5>
                <div className="card-body">
                  <BooleanFormControl label="Disseminated cancer" type="boolean" />
                  <BooleanFormControl label="Open wound w/ or w/o infection" type="boolean" />
                  <BooleanFormControl label="Steroid use for chronic condition" type="boolean" />
                  <BooleanFormControl label=">10% wt loss w/in 6 mos" type="boolean" />
                  <BooleanFormControl label="Bleeding disorder" type="boolean" />
                  <SelectFormControl label="Bleeding risk due to medication" type="select" options="bleedingRisk" />
                  <BooleanFormControl label=">4 unites RBCs w/in 72hrs of surgery" type="boolean" />
                  <SelectFormControl label="Chemo w/in 90d" type="select" options="chemo" />
                  <BooleanFormControl label="Radiotherapy w/in 90d" type="boolean" />
                  <SelectFormControl label="Sepsis w/in 48hrs of surgery" type="select" options="sepsis" />
                  <BooleanFormControl label="Pregnancy Status" type="boolean" />
                  <BooleanFormControl label="Hx of cancer diagnosis" type="boolean" />
                  <BooleanFormControl label="Hx of radiation therapy to planned surgical field" type="boolean" />
                  <SelectFormControl label="# of prior surgeries in same operative field" type="select" options="priorSurgeries" />
                </div>
              </div>
            </div>
          </div>

          <div className="row text-right">
            <div className="col text-center">
              <input type="submit" value="Save Draft" className="btn btn-primary mr-3" />
              <input type="submit" value="Submit Report" className="btn btn-primary" />
            </div>
          </div>
        </HandlerContext.Provider>
      </form>
    </div>
    )
  }
}