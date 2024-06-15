import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Skills from "pages/Skills";
import SocialMedia from "pages/SocialMedia";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
