import { Container, Typography } from "@mui/material";
import AppLogo from "../logo/App";

type MainScreenProps = {
    children: React.ReactNode;
    title: string;
}

const MainScreen = (params: MainScreenProps) => {
    return (
        <Container maxWidth="lg" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        }}>
            <AppLogo size="large" onClick={() => {
                window.location.href = '/recipes';
            }} />
            <Typography variant="h5" sx={{ mt: 2 }}>
                {params.title}
            </Typography>
        </Container>
    )
}

export default MainScreen
