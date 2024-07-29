import About from "pages/About";
import Contact from "pages/Contact";
import Game from "pages/Game";
import Home from "pages/Home";
import Skills from "pages/Skills";
import SocialMedia from "pages/SocialMedia";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
