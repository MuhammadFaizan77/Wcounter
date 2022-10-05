// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 700);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = '#252239'; //#252239
      showAlert('Darkmode Enabled', 'Success')

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Lightmode Enabled', 'Success')
    }
  }
  return (
    <>
      <Navbar title="Wcounter" mode={mode} toggleMode={toggleMode} about="About us" />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter your Text Below" mode={mode} />
      </div>
    </>
  );
}

export default App;
