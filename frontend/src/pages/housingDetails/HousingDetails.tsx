
import Navbar from '../../components/navbar'
import { Container, Typography, Box, Avatar } from '@mui/material'
import Grid from '@mui/material/Grid2'

import commercialPropertyImage from '../../assets/images/commerical_property.png'
import residentialPropertyImage from '../../assets/images/residential_property.png'
import lanPropertyImage from '../../assets/images/land_property.png'

import Footer from '../../components/footer'
import ImageGallery from '../../components/imageGallery'

import ShadowBox1 from '../../components/shadowBox/box1'
import ShadowBox2 from '../../components/shadowBox/box2'
import DynamicIcon from '../../components/dynamicIcon'

import { reviews } from '../../dummyData'
import { similarProperties } from '../../dummyData'
import PropertyCard from '../../components/propertyCard'
import { useParams } from 'react-router-dom'

interface CardData {
    title: string
    description: string
    imageUrl: string
}

interface Location {
    address: string
    imageUrl: string
}

const cardData: CardData[] = [
    {
        title: 'Residential',
        description: 'Discover homes that suit your lifestyle, from cozy apartments to spacious family houses.',
        imageUrl: residentialPropertyImage
    },
    {
        title: 'Commercial',
        description: "Find the perfect space for your business, whether it's an office, retail shop, or industrial facility.",
        imageUrl: commercialPropertyImage
    },
    {
        title: 'Land',
        description: 'Explore land opportunities for development, agriculture, or personal use in prime locations.',
        imageUrl: lanPropertyImage
    },
    {
        title: 'Residential',
        description: 'Discover homes that suit your lifestyle, from cozy apartments to spacious family houses.',
        imageUrl: residentialPropertyImage
    },
    {
        title: 'Commercial',
        description: "Find the perfect space for your business, whether it's an office, retail shop, or industrial facility.",
        imageUrl: commercialPropertyImage
    },
    {
        title: 'Land',
        description: 'Explore land opportunities for development, agriculture, or personal use in prime locations.',
        imageUrl: lanPropertyImage
    },
]

const imgUrls = [
    'logo512.png',
    'robot.png',
    'residential_property.png',
    'commerical_property.png',
]

const HousingDetails = () => {
    const { id } = useParams();

    return (
        <>
            <ShadowBox1>
                <Navbar />
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <ImageGallery imgUrls={imgUrls} />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    sx={{ fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}
                                >
                                    Housing name
                                    <span style={{
                                        display: 'block',
                                        height: '5px',
                                        backgroundColor: '#FF5A5F',
                                        width: '100px',
                                        marginTop: '10px'
                                    }}></span>
                                </Typography>
                                <Typography variant="h6" component="p" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                                    Property address
                                </Typography>
                                <Typography variant="h6" component="p" color="secondary" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                                    $150,000
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: '1.8' }} mb={3}>
                                    Whether buying, selling, or renting, we make finding your perfect home simple and stress-free.
                                    Explore a wide range of properties, from cozy apartments to luxury estates.
                                    With our expert support and user-friendly tools, your dream home is just a few clicks away.
                                    Start your journey to better living today.
                                </Typography>
                                <Typography variant="h6" component="p" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                                    Contact number :{" "}
                                    <Typography variant="h6" component="span" color="secondary" sx={{ fontWeight: 'bold' }}>
                                        +61 567 678 78
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* infomation */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {cardData.map((item, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Box
                                        sx={{
                                            maxWidth: 345,
                                            borderRadius: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}>
                                        <DynamicIcon iconName='Apartment' sx={{ fontSize: 40 }} color='secondary' />
                                        <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }} mt={2}>
                                            Title
                                        </Typography>
                                        <Typography variant="body2" component="p" color='textSecondary'>
                                            Whether buying, selling, or renting, we make finding your perfect home simple and stress-free.
                                            Explore a wide range of properties.
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </ShadowBox1>


            <ShadowBox2>
                {/* location */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontWeight: 'bold' }}
                        >
                            <Typography
                                variant="h5"
                                component="span"
                                color='secondary'
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                            >
                                Location{" "}
                            </Typography>
                            Details
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            color='textSecondary'
                            my={3}
                        >
                            located town
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            <Grid size={{ xs: 12, sm: 7 }} container spacing={5} justifyContent="center" my={4}>
                                {cardData.map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                        <Box
                                            sx={{
                                                maxWidth: 345,
                                                borderRadius: 3,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center'
                                            }}>
                                            <DynamicIcon iconName='Apartment' sx={{ fontSize: 40 }} color='secondary' />
                                            <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }} mt={2}>
                                                Title
                                            </Typography>
                                            <Typography variant="body2" component="p" color='textSecondary'>
                                                Whether buying, selling, or renting, we make finding your perfect home simple and stress-free.
                                                Explore a wide range of properties.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid size={{ xs: 12, sm: 5 }} container spacing={3} justifyContent="center" my={4}>
                                <iframe frameBorder={"none"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13934.347077273695!2d-81.0019983526626!3d29.176847114644207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d9cf4219edd9%3A0x23a2752b694c2151!2sRidge%20Apartments!5e0!3m2!1sen!2slk!4v1729857598180!5m2!1sen!2slk" height="350" loading="lazy"></iframe>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* reviews */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontWeight: 'bold' }}
                        >
                            Reviews
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {reviews.map((review, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Box borderRadius={1} maxWidth={400} p={2}>
                                        <Grid container spacing={2}>
                                            <Grid size={12} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                <Avatar alt="Remy Sharp" src={review.imgUrl} sx={{ width: 60, height: 60 }} />
                                                <Typography
                                                    variant='body1'
                                                    component="span"
                                                >
                                                    {review.name}
                                                </Typography>
                                            </Grid>
                                            <Grid size={12} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                <Typography
                                                    variant='body2'
                                                    component="p"
                                                    color='textSecondary'
                                                >
                                                    "{review.review}"
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                {/* similar properties */}
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography
                            variant="h5"
                            gutterBottom
                            color='textSecondary'
                        >
                            Similar Properties
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {similarProperties.map((property, index) => (
                                <PropertyCard propertyData={property} />
                            ))}
                        </Grid>
                    </Container>
                </div>
            </ShadowBox2>

            {/* footer */}
            <Footer />
        </>
    )
}

export default HousingDetails