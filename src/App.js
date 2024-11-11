import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React,{useState} from "react";

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
<Navbar title="TextUtil" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} showAlert={showAlert}/>
<TextForm heading="Enter your text to analyse" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    </>
  );
}

export default App;
