import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className = "app">
      <Router>
        <Routes >
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;