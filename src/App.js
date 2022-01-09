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

const App = () =>{
const  pagesize = 10;
const apikey = process.env.REACT_APP_NEWS_API;
const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='blue'
        // color='#f11946'
        progress={progress}
      />
                        {/* Switch */}
          <Switch>
           
          <Route exact path="/">  <News setProgress={setProgress } apikey={apikey} key="general" pagesize={pagesize} country="in" category="General" heading="Headline"/> </Route>
          <Route exact path="/business">  <News setProgress={setProgress } apikey={apikey} key="business" pagesize={pagesize} country="in" category="Business" heading="Business"/> </Route>
          <Route exact path="/general">  <News setProgress={setProgress } apikey={apikey} key="general" pagesize={pagesize} country="in" category="General" heading="General"/> </Route>
          <Route exact path="/technology">  <News setProgress={setProgress } apikey={apikey} key="techno" pagesize={pagesize} country="in" category="Technology" heading="Technology"/> </Route>
          <Route exact path="/sports">  <News setProgress={setProgress } apikey={apikey} key="sports" pagesize={pagesize} country="in" category="Sports" heading="Sports"/> </Route>
          <Route exact path="/health">  <News setProgress={setProgress } apikey={apikey} key="hea;th" pagesize={pagesize} country="in" category="Health" heading="Health"/> </Route>
          <Route exact path="/science">  <News setProgress={setProgress } apikey={apikey} key="science" pagesize={pagesize} country="in" category="Science" heading="Science"/> </Route>
          <Route exact path="/entertainment">  <News setProgress={setProgress } apikey={apikey} key="entertainment" pagesize={pagesize} country="in" category="Entertainment" heading="Entertainment" /> </Route>
            
          </Switch>
          
          </Router>
      </div>
    )
  
}

export default App;














// function App() {


 
//   return (
//     <>
//      <h1> Hello React </h1>
//     </>
//   );
// }

// export default App;
