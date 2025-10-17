import {Card, CardContent, Typography, Box, Collapse, Button, Chip, IconButton} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

type ProjectCardProps = {
    title: string;
    icon: React.ReactNode;
    description: string;
    tech: string[];
    link?: string;
    expanded: boolean;
    onExpand: () => void;
};

const ProjectCard = ({
    title,
    icon,
    description,
    tech,
    link,
    expanded,
    onExpand,
} : ProjectCardProps) => {
    return (
        <Card
            elevation={expanded ? 8 : 4}
            onClick={onExpand}
            sx={{
                borderRadius: 3,
                cursor: 'pointer',
                backgroundColor: expanded ? "rgba(239, 68, 68, 0.08)" : "background.paper",
                transition: 'all 0.3s ease',
                "&:hover": {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[8]
                },
            }}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                    <Box sx={{ mr: 1}}>{icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                        {title}
                    </Typography>
                    {link && (
                        <IconButton
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ ml: 'auto'}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LaunchIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {description}
                </Typography>

                <Collapse in={expanded} timeout={"auto"} unmountOnExit>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary', fontWeight: 'bold' }}>
                            Tecnologías:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {tech.map((t, i) => (
                                <Chip
                                    key={i}
                                    label={t}
                                    size="small"
                                    sx={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'text.primary', fontWeight: 'bold' }}
                                />
                            ))}
                        </Box>

                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                onExpand();
                            }}
                            sx={{
                                mt: 2,
                                color: 'secondary.main',
                                fontWeight: 'bold',
                            }}
                        >
                        </Button>
                    </Box>
                </Collapse>
            </CardContent>
        </Card>
    );
};
export default ProjectCard;