import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Top from "../Routes/Top/Top";
import Main from "../Routes/Main/Main";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Top/>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}
