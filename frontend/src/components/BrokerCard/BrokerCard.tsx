import React from 'react'
import Grid from '@mui/material/Grid2'
import { Broker } from '../../interfaces'
import { Avatar, Box, Typography } from '@mui/material'

interface Props {
    brokerData: Broker
    key: any
}

const BrokerCard = ({ brokerData, key }: Props) => {
    return (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={key}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Avatar alt="Remy Sharp" src={brokerData.imageUrl} sx={{ width: 160, height: 160, marginBottom: 2 }} />
                <Typography variant="h6" gutterBottom >
                    {brokerData.name}
                </Typography>
            </Box>
        </Grid>
    )
}

export default BrokerCard