import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";
import OneWork from "./pages/OneWork";
import Lenis from "@studio-freight/lenis";
import AdminLayout from "./pages/layout/AdminLayout";
import WorksAdmin from "./pages/admin/WorksAdmin";

import "./App.scss";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <Router>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="60, 60, 60"
        innerScale={0.7}
        outerScale={5}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<OneWork />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<WorksAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
