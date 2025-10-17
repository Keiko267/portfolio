import { useState } from "react";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import {Web, Pets} from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = ({
    darkMode,
    setDarkMode,
}: {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    
    const projects = [
        {
            title: "ToBoVet",
            icon: <Pets/>,
            description: "Aplicación web de gestión veterinaria para una clínica a domicilio con gestión de clientes, citas y facturas.",
            tech: ["React", "Node.js", "MySQL", "Jest", "JWT"],
        },
        {
            title: "Portfolio",
            icon: <Web/>,
            description: "Mi portfolio personal desarrollado con React y Material-UI para mostrar mis proyectos y habilidades.",
            tech: ["React", "TypeScript"],
            link: "https://mi-portfolio.com"
        },

    ];
    console.log(12/projects.length);
    const columnSize = Math.max(12 / projects.length, 4);
    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Navbar/>
            <Box sx={{ mt: 8, px: { xs: 2, md: 8}}}>
                <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid
                        key={index}
                        size={{
                            xs: 12,
                            sm: projects.length % 2 === 1 ? 12 : 6,
                            md: columnSize,
                        }}
                    >
                        <ProjectCard
                            {...project}
                            expanded={expandedIndex === index}
                            onExpand={() =>
                                setExpandedIndex(expandedIndex === index ? null : index)
                            }
                        />
                    </Grid>
                ))}
                </Grid>
            </Box>
        </>
    );
};
export default Projects;