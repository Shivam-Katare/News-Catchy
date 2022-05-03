import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pagesize = 10;
  const apikey = "c1bcac03d46c4ab7af774be570acd3a7";
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(0)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(36 47 58)';
      document.body.style.color = 'dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'light';
    }
  }
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          color='blue'
          // color='#f11946'
          progress={progress}
        />
        {/* Switch */}
        <Switch>
          <Route exact path="/">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="in" category="General" heading="Headline" /> </Route>
          <Route exact path="/business">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="business" pagesize={pagesize} country="in" category="Business" heading="Business" /> </Route>
          <Route exact path="/general">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="in" category="General" heading="General" /> </Route>
          <Route exact path="/technology">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="techno" pagesize={pagesize} country="in" category="Technology" heading="Technology" /> </Route>
          <Route exact path="/sports">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="sports" pagesize={pagesize} country="in" category="Sports" heading="Sports" /> </Route>
          <Route exact path="/health">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="hea;th" pagesize={pagesize} country="in" category="Health" heading="Health" /> </Route>
          <Route exact path="/science">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="science" pagesize={pagesize} country="in" category="Science" heading="Science" /> </Route>
          <Route exact path="/entertainment">  <News mode={mode} setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={pagesize} country="in" category="Entertainment" heading="Entertainment" /> </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
