import './App.css';
import React, { useState } from 'react'

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {// function based component earlier class based was used
  // creating hooks and setting default value, afterward it's value can be changed
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message, 
      type: type 
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1000);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (setColor)=>{
    removeBodyClasses();
    console.log("mode:: ", setColor);
    
    document.body.classList.add('bg-'+setColor); 
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    // below code is JSX
    // react prefer camelCase
    // class and for are reserved keyword so there name is changed 
    // class => className
    // for   => htmlFor
    // if inside react, JSX is using then return only one elment like below whole code is inside div tag
    // combine multiple elements into jsx fragment <>    </> 
    // whenever you have to write javascript in jsx write inside {}
    <>
      {/* passing value for props */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtile"/>  */}
      {/* default values will be set for propos */}
      {/* <Navbar />  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <div className="container my-3 ">
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to convert" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
