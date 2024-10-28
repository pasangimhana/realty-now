import { useState } from 'react'
import Navbar from '../../components/navbar'
import { Container, Typography, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Chip, Avatar } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Footer from '../../components/footer'
import PropertyCard from '../../components/propertyCard'
import ShadowBox1 from '../../components/shadowBox/box1'

import { recommendations, brokers, bestDeals } from '../../dummyData'
import BrokerCard from '../../components/BrokerCard'

const Explore = () => {
    const [keyword, setKeyword] = useState('')
    const [status, setStatus] = useState('All')
    const [category, setCategory] = useState('Residential')
    const [location, setLocation] = useState('Melbourne')
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])


    const handleSearch = () => {
        // Handle the search logic here
        console.log({ keyword, status, category, location })
        setSelectedFilters([status, category, location])
    }

    const handleFilter = () => {
        // Handle the filter logic here
        console.log('Filter button clicked')
    }

    const handleDeleteFilter = (filter: string) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.filter((item) => item !== filter)
        )
    }

    return (
        <>
            <ShadowBox1>
                <Navbar />
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px', marginTop: "30px", lineHeight: '1.2' }}>
                    Find your
                    <Typography variant="h3" component="span" color='secondary' gutterBottom sx={{ fontWeight: 'bold' }}>
                        {" perfect "}
                    </Typography>
                    stay
                </Typography>
                {/* import images here */}
                <Grid container spacing={3} justifyContent="center" my={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                    </Grid>
                </Grid>

                {/* filter */}
                <Container>
                    <Box display="flex" alignItems="center" gap={2} p={2} borderRadius={1} boxShadow={1}>
                        <TextField label="Keyword" variant="outlined" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                        <FormControl variant="outlined">
                            <InputLabel>Status</InputLabel>
                            <Select value={status} onChange={(e) => setStatus(e.target.value as string)} label="Status" >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel>Category</InputLabel>
                            <Select value={category} onChange={(e) => setCategory(e.target.value as string)} label="Category" >
                                <MenuItem value="Residential">Residential</MenuItem>
                                <MenuItem value="Commercial">Commercial</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel>Location</InputLabel>
                            <Select value={location} onChange={(e) => setLocation(e.target.value as string)} label="Location" >
                                <MenuItem value="Melbourne">Melbourne</MenuItem>
                                <MenuItem value="Sydney">Sydney</MenuItem>
                                <MenuItem value="Brisbane">Brisbane</MenuItem>
                            </Select>
                        </FormControl>
                        <Box flexGrow={1} />
                        <Button variant="outlined" onClick={handleFilter} >
                            Filter
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSearch} >
                            Search
                        </Button>
                    </Box>

                    {selectedFilters.length > 0 && (
                        <Box mt={2}>
                            <Typography variant="subtitle1">Applied Filters:</Typography>
                            <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
                                {selectedFilters.map((filter, index) => (
                                    <Chip key={index} label={filter} onDelete={() => handleDeleteFilter(filter)} color="primary" variant="outlined" />
                                ))}
                            </Box>
                        </Box>
                    )}
                </Container>

                {/* recommendations */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} >
                            Recommended for{" "}
                            <Typography variant="h5" component="span" color='secondary' gutterBottom sx={{ fontWeight: 'bold' }} >
                                you
                            </Typography>
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {recommendations.map((recommendation, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <PropertyCard propertyData={recommendation} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                {/* best deals */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} >
                            <Typography variant="h5" component="span" color='secondary' gutterBottom sx={{ fontWeight: 'bold' }} >
                                Best{" "}
                            </Typography>
                            Deals
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {bestDeals.map((property, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <PropertyCard propertyData={property} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                {/* best brokers */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} >
                            <Typography variant="h5" component="span" color='secondary' gutterBottom sx={{ fontWeight: 'bold' }} >
                                Best{" "}
                            </Typography>
                            Brokers Of The Month
                        </Typography>
                        <Grid container spacing={5} justifyContent="center" my={4}>
                            {brokers.map((broker, index) => (
                                <BrokerCard brokerData={broker} key={index} />
                            ))}
                        </Grid>
                    </Container>
                </div>
            </ShadowBox1>

            <Footer />
        </>
    )
}

export default Explore