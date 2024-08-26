import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React,{ useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    console.log(type);
    console.log(message);
    setTimeout(()=>{
      setAlert(null);
    },15000);
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enable","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
      document.title="TextUtils-Light Mode";
  
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       <Routes>
        <Route path="/about" element={<About mode={mode} />}>
          
        </Route>
        <Route path="/" element={<TextForm  showAlert={showAlert} heading="TextUtils-Word Counter | Character count | lowercase to uppercase | uppercase to lowercase" mode={mode}/>}>
          
        </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
