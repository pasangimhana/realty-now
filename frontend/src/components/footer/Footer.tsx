import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'

import logoImage from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <div style={{ padding: '2rem' }}>
                <Container>
                    <Grid container spacing={3} justifyContent="center" my={4}>
                        <Grid size={{ xs: 12, sm: 3 }} alignContent={"left"}>
                            <img
                                src={logoImage}
                                alt="family image"
                                style={{ width: '100%', marginBottom: '1rem', maxWidth: '240px' }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 2 }} sx={{ fontWeight: 'bold' }}>
                            <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>Company</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >About</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Career</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Mobile</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 2 }} sx={{ fontWeight: 'bold' }}>
                            <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>Contact</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Help/FAQ</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Press</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Affliates</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 2 }} sx={{ fontWeight: 'bold' }}>
                            <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>More</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Airlinefees</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Airline</Typography>
                            <Typography variant="body1" color='textSecondary' align="left" >Low fare tips</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 3 }} sx={{ fontWeight: 'bold' }}>
                            <Typography variant="h6" align="right" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Discover our app
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Typography variant="body2" align="center" color='textSecondary' gutterBottom mt={5}>
                    All rights are reserved
                </Typography>
            </div>
        </>
    )
}

export default Footer