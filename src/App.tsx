import "./App.css";
import "tailwindcss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ padding: "24" }}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </main>
    </>
  );
}
