import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Router>
      {/* Temporary Navigation (just to test switching pages) */}
      <nav style={{ padding: "1rem", background: "#f8f9fa" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about">About Us</Link>
    
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        
      </Routes>
    </Router>
  );
}

export default App;
