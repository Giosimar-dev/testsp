import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import StartFB from "@/pages/Start_fb";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start_fb" element={<StartFB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
