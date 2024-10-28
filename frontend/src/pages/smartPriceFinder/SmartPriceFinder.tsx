import Navbar from '../../components/navbar'
import { Card, CardContent, Container, Typography, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Footer from '../../components/footer'
import ShadowBox1 from '../../components/shadowBox/box1'
import { useState } from 'react'

const SmartPriceFinder = () => {
    const [filter1, setFilter1] = useState('All')
    const [filter2, setFilter2] = useState('All')
    const [filter3, setFilter3] = useState('All')

    const filter1Items: string[] = [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Perth",
        "Adelaide",
        "Hobart",
        "Darwin",
        "Canberra",
        "Gold Coast",
        "Newcastle"
    ]

    const filter2Items = [
        "Wollongong",
        "Geelong",
        "Cairns",
        "Townsville",
        "Mackay",
        "Central Coast",
        "Sunshine Coast",
        "Launceston",
        "Ballarat",
        "Bendigo"
    ]

    return (
        <>
            <ShadowBox1>
                <Navbar />

                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="h6" component="p" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                                    Add your charts <span style={{ color: '#FF5A5F' }}>HERE</span>
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card style={{ minWidth: 400, padding: "10px 5px", margin: "0 auto" }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" mb={4}>
                                            Price Calculator
                                        </Typography>

                                        <Grid container spacing={2}>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel>Filter 1</InputLabel>
                                                    <Select value={filter1} onChange={(e) => setFilter1(e.target.value as string)} label="Filter1" >
                                                        {filter1Items.map((item, index) => {
                                                            return <MenuItem value={item} key={index}>{item}</MenuItem>
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel>Filter 2</InputLabel>
                                                    <Select value={filter2} onChange={(e) => setFilter2(e.target.value as string)} label="Filter2" >
                                                        {filter2Items.map((item, index) => {
                                                            return <MenuItem value={item} key={index}>{item}</MenuItem>
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel>Status</InputLabel>
                                                    <Select value={filter3} onChange={(e) => setFilter3(e.target.value as string)} label="Status" >
                                                        <MenuItem value="All">All</MenuItem>
                                                        <MenuItem value="Active">Active</MenuItem>
                                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }}>
                                                <TextField
                                                    size='medium'
                                                    id="outlined-read-only-input"
                                                    label="Total price"
                                                    color='secondary'
                                                    value={'$ 12000'}
                                                    slotProps={{
                                                        input: {
                                                            readOnly: true,
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12 }}>
                                                <Stack direction="row" spacing={1}>
                                                    <Button type="submit" variant="contained" color="primary" fullWidth>Calculate price</Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </ShadowBox1>

            <Footer />
        </>
    )
}

export default SmartPriceFinder