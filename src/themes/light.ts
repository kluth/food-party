import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff0000',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: [
                        'Lucida handwriting',
                        'script'
                    ].join(','),
                },
                h1: {
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01562em',
                },
                h2: {
                    fontSize: '2rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.00833em',
                },
                h3: {
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '0em',
                },
                h4: {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '0.00735em',
                },
                h5: {
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '0em',
                },
                h6: {
                    fontSize: '1rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '0.0075em',
                }
            },
        },
    },
    transitions: {
        create: () => 'none',
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
        easing: {
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        }
    },
})