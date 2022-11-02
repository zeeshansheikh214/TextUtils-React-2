
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    
}

  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "Success");
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutTitle="About"/>
      <Alert alert={alert}/> 
      <div className="container my-3">
        {/* <Switch> */}
            {/* <Route exact path="/"> */}
              <Textform showAlert={showAlert} heading="Enter The The Txt To Analyze" mode={mode}/>
            {/* </Route> */}
            {/* <Route exact path="/about">
              <About/>
            </Route >
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
