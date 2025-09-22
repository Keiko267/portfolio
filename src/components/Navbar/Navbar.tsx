import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import {Menu} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
	{ label: "Inicio", href: "/" },
	{ label: "Experiencia", href: "/experience" },
	{ label: "Proyectos", href: "/projects" },
	{ label: "Contacto", href: "/contact" },
];

const Navbar: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	return (
		<>
			<AppBar
				position="static"
				color="transparent"
				elevation={0}
                sx={{
                    mt: -10
                }}
			>
				<Toolbar>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={RouterLink}
                                to={item.href}
                                sx={{
                                    color: "text.primary",
                                    textTransform: "none",
                                    ":hover": { bgcolor: "secondary.main" },
                                    flex: 1, 
                                    minWidth: 0, 
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
					{/* XS hamburger menu */}
					<IconButton
						edge="end"
						color="inherit"
						aria-label="open-drawer"
						onClick={() => setDrawerOpen(true)}
						sx={{ display: { md: "none" } }}
					>
						<Menu />
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Drawer for mobile */}
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={() => setDrawerOpen(false)}
					onKeyDown={() => setDrawerOpen(false)}
				>
					<List>
						{navItems.map((item) => (
							<ListItem key={item.label} disablePadding>
								<ListItemButton
									component={RouterLink}
									to={item.href}
								>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box
				sx={{ 
					width: "100%",
					mt: 0,
					height: 2,
					display: { xs: "none", md: "block" },
					background: (theme) => `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.background.default})`,
				}}
			/>
		</>
	);
};

export default Navbar;
