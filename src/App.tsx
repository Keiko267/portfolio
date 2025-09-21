import "./App.css";
import "tailwindcss";
import Home from "./pages/Home";

export default function App({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
}) {
	return (
		<>
			<Home darkMode={darkMode} setDarkMode={setDarkMode} />
		</>
	);
}
