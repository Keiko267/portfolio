import {Box, Typography} from "@mui/material";
import { Storage, Devices, Engineering } from "@mui/icons-material";
const SkillsAndAbout = () => {
    const skills = [
        {icon: <Storage fontSize="large" sx={{ color: "secondary.main" }} />, label: "Backend Engineering"},
        {icon: <Devices fontSize="large" sx={{ color: "secondary.main" }} />, label: "Frontend Development"},
        {icon: <Engineering fontSize="large" sx={{ color: "secondary.main" }} />, label: "Algorithms & Data Structures"},
    ];
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 6,
                mt: 8,
            }}
        >
            <Box sx={{
                flex: 1,
                position: "relative",
                pl: 5,
                mt: 5,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "20px",
                    top: 6,
                    bottom: 0,
                    width: "2px",
                    bgcolor: "secondary.main",
                    opacity: 0.8
                },
            }}
            >
                {skills.map((skill, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 6,
                            position: "relative",

                        }}
                    >
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                bgcolor: "secondary.main",
                                borderRadius: "50%",
                                position: "absolute",
                                left: 6
                            }}
                        />
                        <Box sx={{ display: "flex", alignItems: "center", ml: 4 }}>
                            <Box sx={{ mr: 1 }}>{skill.icon}</Box>
                            <Typography variant="h6" fontWeight="bold">{skill.label}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    flex: 1,
                    p: 2,
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                    Sobre mí
                </Typography>
                <Typography variant="body1" sx={{fontSize: 18, lineHeight: 1.6 }}>
                    Hola! Soy Carlos, un ingeniero informático con pasión por aprender nuevas tecnologías y resolver problemas reales. <br />
                    Me especializo en desarrollo backend, pero también disfruto con frontend (con ayuda de alguien con buen gusto), algoritmos complejos, ingeniería del producto o análisis de datos. <br />
                    Siempre busco oportunidades para poder crecer profesionalmente, aprender y aportar valor en proyectos que me motiven.
                </Typography>
            </Box>

        </Box>

    )
}

export default SkillsAndAbout;