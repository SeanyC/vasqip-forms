import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
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
      <form id="vasqipForm" onSubmit={this.onSubmit}>
        <Accordion defaultActiveKey="0">
          <HandlerContext.Provider value={ this.onChangeFormData }>
            <Card id="preoperativeInfo">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Preoperative Information
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <Card className="mb-3">
                        <Card.Header as="h5">General</Card.Header>
                        <Card.Body>
                          <div className="row">
                            <div className="col">
                              <TextFormControl label="Height" type="text" />
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
                        </Card.Body>
                      </Card>
                      <Card className="mb-3">
                        <Card.Header as="h5">Pulmonary, Hepatobiliary, GI</Card.Header>
                        <Card.Body>
                          <BooleanFormControl label="Vent dependent w/in 48 hrs pre-op" type="boolean" />
                          <BooleanFormControl label="Severe COPD" type="boolean" />
                          <BooleanFormControl label="Current pneumonia" type="boolean" />
                          <BooleanFormControl label="Ascites" type="boolean" />
                          <BooleanFormControl label="Esophageal varices" type="boolean" />
                        </Card.Body>
                      </Card>
                      <Card className="mb-3">
                        <Card.Header as="h5">Cardiac</Card.Header>
                        <Card.Body>
                          <SelectFormControl label="CHF" type="select" options="chf" />
                          <SelectFormControl label="Prior MI" type="select" options="priorMi" />
                          <SelectFormControl label="PCI" type="select" options="pci" />
                          <SelectFormControl label="Prior heart surgery" type="select" options="priorHeartSurgery" />
                          <SelectFormControl label="Angina Severity" type="select" options="anginaSeverity" />
                          <SelectFormControl label="Angina timeframe" type="select" options="anginaTimeframe" />
                          <SelectFormControl label="Hypertension" type="select" options="hypertension" />
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col">
                      <Card className="mb-3">
                        <Card.Header as="h5">Vascular</Card.Header>
                        <Card.Body>
                          <SelectFormControl label="PAD" type="select" options="pad" />
                          <BooleanFormControl label="Rest pain / gangrene" type="boolean" />
                        </Card.Body>
                      </Card>
                      <Card className="mb-3">
                        <Card.Header as="h5">Renal</Card.Header>
                        <Card.Body>
                          <BooleanFormControl label="ARF" type="boolean" />
                          <BooleanFormControl label="Dialysis - requires or is on" type="boolean" />
                        </Card.Body>
                      </Card>
                      <Card className="mb-3">
                        <Card.Header as="h5">CNS</Card.Header>
                        <Card.Body>
                          <BooleanFormControl label="Impaired sensorium" type="boolean" />
                          <BooleanFormControl label="Coma" type="boolean" />
                          <BooleanFormControl label="Hemiplegia/hemiparesis" type="boolean" />
                          <SelectFormControl label="Carotid artery obstruction" type="select" options="carotidObstruction" />
                          <SelectFormControl label="Hx of CVD events" type="select" options="hxOfCvd" />
                          <BooleanFormControl label="Tumor involving CNS" type="boolean" />
                          <SelectFormControl label="Impaired cognitive function" type="select" options="impairedCog" />
                        </Card.Body>
                      </Card>
                      <Card className="mb-3">
                        <Card.Header as="h5">Nutritional/Immune,Other</Card.Header>
                        <Card.Body>
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
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Laboratory Test Results
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <TextFormControl label="Serum Sodium" type="text" />
                  <TextFormControl label="BUN" type="text" />
                  <TextFormControl label="Serum Creatinine" type="text" />
                  <TextFormControl label="Serum Albumin" type="text" />
                  <TextFormControl label="Total Bilirubin" type="text" />
                  <TextFormControl label="SGOT" type="text" />
                  <TextFormControl label="Alkaline Phosphatase" type="text" />
                  <TextFormControl label="WBC" type="text" />
                  <TextFormControl label="Hematocrit" type="text" />
                  <TextFormControl label="Platelet Count" type="text" />
                  <TextFormControl label="PTT" type="text" />
                  <TextFormControl label="PT" type="text" />
                  <TextFormControl label="INR" type="text" />
                  <TextFormControl label="SGOT" type="text" />
                  <TextFormControl label="Alkaline Phosphatase" type="text" />
                  <TextFormControl label="Hemoglobin A1c (1000 days)" type="text" />
                  <TextFormControl label="Highest Anion Gap" type="text" />
                  <TextFormControl label="Highest Serum Sodium" type="text" />
                  <TextFormControl label="Lowest Serum Sodium" type="text" />
                  <TextFormControl label="Highest Potassium" type="text" />
                  <TextFormControl label="Lowest Potassium" type="text" />
                  <TextFormControl label="Highest CPK" type="text" />
                  <TextFormControl label="Highest CPK-MB Band" type="text" />
                  <TextFormControl label="Highest Total Bilirubin" type="text" />
                  <TextFormControl label="Highest WBC" type="text" />
                  <TextFormControl label="Lowest Hematocrit" type="text" />
                  <TextFormControl label="Highest Troponin I" type="text" />
                  <TextFormControl label="Highest Troponin T" type="text" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Operation Information
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <TextFormControl label="Surgical Specialty" type="text" />
                  <TextFormControl label="Prinicpal Operation" type="text" />
                  <TextFormControl label="CPT Codes" type="text" />
                  <TextFormControl label="Concurrent Procedure" type="text" />
                  <TextFormControl label="PGY of Primary Surgeon" type="text" />
                  <TextFormControl label="Surgical Priority" type="text" />
                  <TextFormControl label="Wound Classification" type="text" />
                  <TextFormControl label="ASA Classification" type="text" />
                  <TextFormControl label="Princ. Anesthesia Technique" type="text" />
                  <TextFormControl label="RBC Units Transfused" type="text" />
                  <TextFormControl label="Intraop Disseminated Cancer" type="text" />
                  <TextFormControl label="Intraoperative Ascites" type="text" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="mb-3">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Patient Demographics
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <TextFormControl label="Transfer Status" type="text" />
                  <TextFormControl label="Observation Admission Date/Time" type="text" />
                  <TextFormControl label="Observation Discharge Date/Time" type="text" />
                  <TextFormControl label="Observation Treating Specialty" type="text" />
                  <TextFormControl label="Hospital Admission Date/Time" type="text" />
                  <TextFormControl label="Hospital Discharge Date/Time" type="text" />
                  <TextFormControl label="Admit/Transfer to Surgical Svc." type="text" />
                  <TextFormControl label="Discharge/Transfer to Chronic Care" type="text" />
                  <TextFormControl label="Length of Postop Hospital Stay" type="text" />
                  <TextFormControl label="Hospital Admission Status" type="text" />
                  <TextFormControl label="Patient's Ethnicity" type="text" />
                  <TextFormControl label="Patient's Race" type="text" />
                  <TextFormControl label="Date of Death" type="text" />
                  <TextFormControl label="30-Day Death" type="text" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </HandlerContext.Provider>
        </Accordion>
        <div className="row text-right">
          <div className="col text-center">
            <input type="submit" value="Save Draft" className="btn btn-primary mr-3" />
            <input type="submit" value="Submit Report" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
    )
  }
}