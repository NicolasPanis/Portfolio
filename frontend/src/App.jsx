import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";

import "./App.scss";

function App() {
  return (
    <Router>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="255, 255, 255"
        innerScale={0.7}
        outerScale={5}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Projects" element={<Projects />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
