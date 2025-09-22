import { Box, Typography } from "@mui/material";
import TimelineBlock from "../../components/TimelineBlock/TimelineBlock";
import { Work, School, WorkspacePremium} from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Experience = ({
    darkMode,
    setDarkMode
}: {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}) => {
    const work = [
        {
            title: "Desarrollador Full Stack",
            company: "Smart-rent",
            period: "Jun. 2023 - Actualidad",
            description: "Desarrollo y mantenimiento de una plataforma de alquiler vacacional utilizando PHP, JavaScript, HTML, CSS y MySQL. Integración de API de terceros como OpenAI, OAuth y otras plataformas como Airbnb y Booking."
        },
        {
            title: "Desarrollador Backend Freelance",
            company: "ToBoVet",
            period: "Ene. 2023 - May. 2025",
            description: "Desarrollo de un CRM para la gestión de clientes, citas y productos de una veterinaria utilizando React, Node.js y MySQL. Implementación de autenticación y autorización de usuarios con JWT y OAuth."
        }
    ];
    const education = [
        {
            title: "Ingeniería Informática",
            company: "Universidad de Cádiz",
            period: "Sept. 2019 - Abr. 2025",
            description: "Graduado en Ingeniería Informática por la Universidad de Cádiz con mención en Sistemas de Información."
        },
    ];

    const certifications = [
        {
            title: "Análisis de Datos",
            company: "Google",
            period: "Nov. 2023 - Nov. 2024",
            description: "Certificación profesional de Google en Análisis de Datos, que cubre habilidades en herramientas como Excel, SQL y R para la manipulación y análisis de datos."
        }
    ];



    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Navbar/>
            <Box sx={{
                mt: 8,
                px: {xs: 2, md: 8},
                alignItems: 'left',
                textAlign: 'left',
                
            }}
            >
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Experiencia
                </Typography>
                <TimelineBlock icon={<Work />} title="Experiencia Laboral" items={work} />
                <TimelineBlock icon={<School />} title="Educación" items={education} />
                <TimelineBlock icon={<WorkspacePremium />} title="Certificaciones" items={certifications} />
            </Box>
        </>

    )
}


export default Experience;