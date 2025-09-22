import {Box, Typography} from "@mui/material";

const TimelineBlock = ({icon, title, items}: {icon: React.ReactNode, title: string, items: any[]}) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', mb: 1 }}>
                <Box sx={{ mt: 0.2}}>
                    {icon}
                </Box>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', ml: 1, mb: 1, color: 'text.secondary'}}>
                    {title}
                </Typography>
            </Box>
            <Box sx={{ pl: 6 }}>
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
        </Box>
    );
}

export default TimelineBlock;