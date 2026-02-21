import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

// styles
import "./App.css";

function Layout() {
  const location = useLocation();

  // routes where navbar should NOT appear
  const hideNavbarRoutes = ["/resume"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;