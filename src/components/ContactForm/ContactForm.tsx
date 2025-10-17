import {useState} from "react";
import {Box, TextField, Button, Typography, Alert, Card, CardContent} from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        time: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.send(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_MAIL_PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ name: "", email: "", message: "", time: new Date().toISOString() });
        } catch (error) {
            console.log(error);
            setStatus("error");
        }
    };
    console.log(new Date().toDateString());
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 8,
                px: { xs: 2, md: 8 },
                width: '100%',
                mx: 'auto',
            }}
        >
            <Card
                elevation={6}
                sx={{
                    width: { xs: '100%', md: '100%' },
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                    p: { xs: 2, md: 4 },
                    boxShadow: 3,
                }}
            >
                <CardContent>
                    <Typography variant="h4"
                        sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: 'text.primary'}}
                    >
                        ¡Escríbeme!
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3
                        }}
                    >
                        <TextField
                            label="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Mensaje"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            fullWidth
                            multiline
                        />
                        <input type="hidden" name="time" value={formData.time} />

                        {status === "success" && <Alert severity="success">¡Mensaje enviado!</Alert>}
                        {status === "error" && <Alert severity="error">Error al enviar el mensaje.</Alert>}

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={status === "sending"}
                            sx={{ mt: 1 }}
                        >
                            {status === "sending" ? "Enviando..." : "Enviar"}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};
export default ContactForm;