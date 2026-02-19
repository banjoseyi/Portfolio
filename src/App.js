import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// page components
import Navbar from './components/Navbar'
import Homepage from './pages/homepage/Homepage'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
