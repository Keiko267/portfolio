import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import meImage from "../../assets/me.png";
type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void
}
const Header: React.FC<Props> = ({darkMode, setDarkMode}) => {
    return (
        <Box
            component="header"
            sx={(theme) => ({
                width: "100%",
                minHeight: "100vh",
                mt: -10,
                background: `radial-gradient(circle at 75.5% 45%, ${theme.palette.secondary.main} 7%, ${theme.palette.secondary.light} 15%,  ${theme.palette.background.default} 25%)`,
            })}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 24,
                    zIndex: 10,
                }}
            >
                <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                    color="inherit"
                    aria-label="toggle theme"
                    sx={{ ml: 1, ":hover": { bgcolor: "secondary.main" } }}
                >
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "calc(100vh - 64px)", 
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                        p: 4,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        fontWeight="bold"
                    >
                        Hello
                        <Typography
                        variant="h3"
                            component="span"
                            sx={{ color: "secondary.main" }}
                        >
                            .
                        </Typography>
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                            sx={{
                                width: 4,
                                height: 40,
                                bgcolor: "secondary.main",
                                borderRadius: 2,
                                mr: 2,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                        <Typography variant="h4" component="h2">
                            I'm Carlos
                        </Typography>
                    </Box>

                    <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
                    >
                        Computer Engineer
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            href="#contact"
                            sx={{ mr: 2, textTransform: "none" }}
                        >
                            Contact me
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            href="#resume"
                            sx={{ textTransform: "none" }}
                        >
                            My Resume
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 4,
                    }}
                >
                    <img
                        src={meImage}
                        alt="Me"
                        style={{ borderRadius: "50%", width: 200, height: 300 }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "2px",
                    background: (theme) => `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.background.default})`,
                    mt: -2 ,
                    display: { xs: "none", md: "block" },
                }}
            />
        </Box>
    );
};

export default Header;
