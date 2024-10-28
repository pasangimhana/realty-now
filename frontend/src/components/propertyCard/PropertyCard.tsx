import React from 'react'
import { Box, Card, CardContent, CardMedia, Chip, Divider, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { PropertyForSale } from '../../interfaces'
import { grey } from '@mui/material/colors'


interface Props {
    propertyData: PropertyForSale
}

const PropertyCard = ({ propertyData }: Props) => {
    return (
        <Card sx={{ maxWidth: 360, borderRadius: '16px', boxShadow: 3, position: 'relative' }}>
            <CardMedia
                component="img"
                height="200"
                image={propertyData.imageUrl}
                alt="Luxury Family Home"
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    display: 'flex',
                    gap: 1,
                }}
            >
                <Chip label={propertyData.availability} sx={{
                    backgroundColor: grey[500],
                    color: 'white',
                    fontWeight: 'bold'
                }} />
                {propertyData.featured ? <Chip label="FEATURED" sx={{
                    backgroundColor: 'primary.main',
                    color: 'black',
                    fontWeight: 'bold'
                }}
                /> : <></>}
            </Box>
            <CardContent>
                <Grid container spacing={2} justifyContent="center" my={4}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                        <Typography variant="h6" component="div" fontWeight="bold">
                            {propertyData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <LocationOnIcon fontSize="small" /> {propertyData.location}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            color="secondary"
                            sx={{ marginTop: '8px', fontWeight: 'bold' }}
                        >
                            ${String(propertyData.price)}
                        </Typography>
                    </Grid>
                </Grid>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    sx={{ marginTop: 2 }}
                >
                    <Typography variant="body2" color='textSecondary'><BedIcon fontSize="small" sx={{ marginRight: '4px' }} />
                        {String(propertyData.beds)} Beds
                    </Typography>
                    <Typography variant="body2" color='textSecondary'><BathtubIcon fontSize="small" sx={{ marginRight: '4px' }} />
                        {String(propertyData.baths)} Bath
                    </Typography>
                    <Typography variant="body2" color='textSecondary'><SquareFootIcon fontSize="small" sx={{ marginRight: '4px' }} />
                        {propertyData.area} sqft
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default PropertyCard