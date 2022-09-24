import {
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
} from "@mui/material";

type NotificationProps = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    severity?: 'error' | 'info' | 'success' | 'warning';
}

const Notification = (params: NotificationProps) => {
    return (
        <MuiSnackbar
            open={params.open}
            autoHideDuration={6000}
            onClose={params.onClose}
        >
            <MuiAlert
                elevation={6}
                variant="filled"
                onClose={params.onClose}
                severity={params.severity}
            >
                {params.children}
            </MuiAlert>
        </MuiSnackbar>
    )
}

export default Notification