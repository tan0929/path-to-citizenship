import React from 'react'
import './Styles/app.css'
import ControlPanel from './Components/control-panel'
import Home from './Pages/home'
import Random from './Pages/random'

import {RecoilRoot} from 'recoil'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {



  return (
    <RecoilRoot>
      <Router>
        <ControlPanel></ControlPanel>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
