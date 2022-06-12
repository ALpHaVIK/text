import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }   
return (
<>
<Router>
  <Navbar title="TextUtils" Aboutext="About_TextUtil" />
  
  <Alert alert={alert}/>
  <div className="container my-9">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" 
            element={ <Textarea showAlert={showAlert} heading="<<---Enter the text to Analyze-->>"/>}>
            </Route>
          </Routes>
  </div>
  </Router>

</>
);
} 
export default App;
