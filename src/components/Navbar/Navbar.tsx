import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

const navItems = [
    {label: 'Inicio', href: '/'},
    {label: 'Sobre mí', href: '/about'},
    {label: 'Proyectos', href: '/projects'},
    {label: 'Contacto', href: '/contact'},
    //CV is in public/CV/CV_CarlosJavier_EN.pdf and there's also a Spanish version (CV_CarlosJavier_ES.pdf), ideally
    //when clicking the link it should open another menu to choose the language, but for now it just links to the English version
    {label: 'Descargar CV', href: '/CV/CV_CarlosJavier_EN.pdf'},
];

const Navbar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <Toolbar>
                <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'text.primary', mr: 2}}>
                    Carlos de la Torre
                </Typography>{}

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                    {navItems.map((item) => (
                        <Button
                            key={item.label}
                            component={RouterLink}
                            to={item.href}
                            sx={{ color: 'text.primary', textTransform: 'none', ":hover": { bgcolor: 'secondary.main'} }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                <IconButton onClick={() => setDarkMode(!darkMode)} color='inherit' aria-label='toggle theme' sx={{ ml: 1, ":hover": { bgcolor: 'secondary.main'} }}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                {/* XS hamburger menu */}
                <IconButton 
                    edge='end'
                    color='inherit'
                    aria-label='open-drawer'
                    onClick={() => setDrawerOpen(true)}
                    sx={{ display: { md: 'none' }}}
                >
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
        
        {/* Drawer for mobile */}
        <Drawer
            anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 250 }} role='presentation' onClick={() => setDrawerOpen(false)} onKeyDown={() => setDrawerOpen(false)}>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton component={RouterLink} to={item.href}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
        </>
    );
};

export default Navbar;