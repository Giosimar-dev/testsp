import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import StartFB from "@/pages/Start_fb";
import SearchFB from "@/pages/Search_contact_fb";
import StartGG from "@/pages/Start_gg";
import SearchGG from "@/pages/Search_contact_gg";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start_fb" element={<StartFB />} />
        <Route path="/search_contactfb" element={<SearchFB />} />
        <Route path="/start_gg" element={<StartGG />} />
        <Route path="/search_contactgg" element={<SearchGG />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
