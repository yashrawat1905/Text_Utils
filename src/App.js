import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);

  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
return (
<>
<Router>
<Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode} /> 
<Alert alert = {alert}/>
<div className='container my-5'>
<Link to = {'/'}></Link>
<Link to={'/about'}></Link>
<Routes>
    <Route path='/about' element={<About mode ={mode} />} />
    <Route path='/' element =
      {<TextForm showAlert = {showAlert} heading = "Enter the text below to analyze" mode = {mode}/>} />
    </Routes>
</div>
</Router>
</>
);
}

export default App;
