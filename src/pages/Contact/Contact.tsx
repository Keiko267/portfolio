import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Contact({
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
            <div>Contacto</div>
        </>
    );
}