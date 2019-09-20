import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import CaseList from "./components/case-list.component"
import EditDataEntry from "./components/edit-data-entry.component"
import CardiacForm from "./components/cardiac-form.component"
import NonCardiacForm from "./components/non-cardiac-form.component"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={CaseList} />
        <Route path="/edit/:id" exact component={EditDataEntry} />
        <Route path="/cardiac" exact component={CardiacForm} />
        <Route path="/non-cardiac" exact component={NonCardiacForm} />
      </div>
    </Router>
  );
}

export default App;
