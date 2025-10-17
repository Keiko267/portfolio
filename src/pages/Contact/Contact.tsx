import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Box } from "@mui/material";

type ContactProps = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

export default function Contact({ darkMode, setDarkMode }: ContactProps) {
    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Navbar/>
            <Box
                sx={{
                    mt: 8,
                    px: { xs: 2, md: 8 },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ContactForm />
            </Box>
        </>
    );
}