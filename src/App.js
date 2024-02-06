import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Home from './components/Home';
import MyNotes from './components/MyNotes';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({type, message});
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <NoteState>
      <Router>
          <Navbar />
          <div  style={{"height": "60px"}}>
          <Alert alert={alert} />
          </div>
          <div className="container my-3">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />} />
              <Route exact path='/mynotes' element={<MyNotes showAlert={showAlert} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login showAlert={showAlert} />} />
              <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
      </Router>
    </NoteState>
  )
}

export default App

