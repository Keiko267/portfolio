import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import SkillsAndAbout from "../components/SkillsAndAbout/SkillsAndAbout";


export default function Home({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
}) {
	return (
		<>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Navbar/>
			<SkillsAndAbout />
		</>
	);
}