import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React,{useState} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // BrowserRouter
} from "react-router-dom";


function App() {
  const[mode,changeMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({message:message,
      type:type
    })
    setTimeout(() => setAlert(null), 1500);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      changeMode('dark');
      document.body.style.backgroundColor = "#09253c";
      showAlert('Dark mode has been enabled.','success');
    }
    else{
      changeMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled!','success');
    }
  }
  return (
<>
<Router>
<Navbar title="TextUtil" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} showAlert={showAlert}/>
  <Routes>
    <Route
      path="/"
      element={<TextForm heading="Enter your text to analyse" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}
    />
    <Route path="/about" element={<About />} />
  </Routes>
</Router>
</>
  );
}

export default App;