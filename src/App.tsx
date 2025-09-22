import "./App.css";
import "tailwindcss";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import { Route, Routes } from "react-router";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
}) {
	return (
		<Routes>
			<Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
			<Route path="/experience" element={<Experience darkMode={darkMode} setDarkMode={setDarkMode} />} />
			<Route path="/projects" element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} />
			<Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
		</Routes>
	);
}
