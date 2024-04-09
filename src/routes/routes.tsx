import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import StartFB from "@/pages/Start_fb";
import SearchFB from "@/pages/Search_contact_fb";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function AppRoutes() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start_fb" element={<StartFB />} />
        <Route path="/search_contactfb" element={<SearchFB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
