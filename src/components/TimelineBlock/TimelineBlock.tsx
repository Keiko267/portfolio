import {Box, Collapse, Typography} from "@mui/material";
import { Card, CardContent } from "@mui/material";

type TimelineBlockProps = {
    icon: React.ReactNode;
    title: string,
    items: any[],
    expanded: boolean,
    onClick: () => void;
}

const TimelineBlock = ({icon, title, items, expanded, onClick}: TimelineBlockProps) => {
    return (
        <Card
            elevation={expanded ? 6 : 2}
            sx={{
                borderRadius: 3,
                backgroundColor: "background.paper",
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onClick={onClick}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mt: 0.2}}>
                        {icon}
                    </Box>
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ fontWeight: 'bold', ml: 1, mb: 0, mt: 0.5, color: 'text.secondary'}}
                    >
                        {title}
                    </Typography>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 6, textAlign: 'left', mt: 2 }}>
                        {items.map((item, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" component="p" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    {item.period}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Collapse>
            </CardContent>
        </Card>
    );
}

export default TimelineBlock;