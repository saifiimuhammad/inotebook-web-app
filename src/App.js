import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyNotes from './components/MyNotes';
import About from './components/About';
import NoteState from './context/notes/NoteState';

const App = () => {
  return (
    <NoteState>
      <Router>
          <Navbar />
          <div className="container my-3">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/mynotes' element={<MyNotes/>} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
      </Router>
    </NoteState>
  )
}

export default App

