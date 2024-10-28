import { createTheme } from '@mui/material/styles'

const primaryColor = '#fca52a'
const secondaryColor = '#FF5A5F'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                    },
                    '& .MuiInputBase-input': {
                        padding: '12px', // Padding for input
                        fontSize: '1rem',  // Font size for input text
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 20px', 
                    textTransform: 'none',
                },
                containedPrimary: {
                    backgroundColor: primaryColor, // Custom primary button color
                    '&:hover': {
                        backgroundColor: '#e28e1f', // Hover color for primary button
                    },
                },
                containedSecondary: {
                    backgroundColor: secondaryColor, // Custom secondary button color
                    '&:hover': {
                        backgroundColor: '#fb8c00', // Hover color for secondary button
                    },
                },
                outlined: {
                    borderColor: primaryColor, // Border color for outlined buttons
                    '&:hover': {
                        borderColor: '#e28e1f', // Border color on hover for outlined buttons
                    },
                },
            },
        },
    },
})

export default theme
