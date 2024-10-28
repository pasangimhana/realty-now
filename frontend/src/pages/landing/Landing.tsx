import Navbar from '../../components/navbar'
import { Card, CardContent, Container, Typography, CardMedia, List, ListItem, ListItemIcon, ListItemText, CardActions, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'

import commercialPropertyImage from '../../assets/images/commerical_property.png'
import residentialPropertyImage from '../../assets/images/residential_property.png'
import lanPropertyImage from '../../assets/images/land_property.png'
import familyImage from '../../assets/images/family.png'
import robotImage from '../../assets/images/robot.png'

import { useTheme } from '@mui/material/styles'
import StarIcon from '@mui/icons-material/Star'
import Footer from '../../components/footer'
import ShadowBox1 from '../../components/shadowBox/box1'
import ShadowBox2 from '../../components/shadowBox/box2'
import { Link, NavLink } from 'react-router-dom'
import { popularLocations } from '../../dummyData'

interface CardData {
    title: string
    description: string
    imageUrl: string
}

interface RecentNews {
    propertyType: string
    date: string
    title: string
    url: string
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
    }
]

const propertyFinder = [
    "Find your dream home with AI-driven recommendations.",
    "Get property suggestions based on your lifestyle.",
    "Discover your perfect match faster and easier.",
    "Let our AI do the work, so you can focus on your future."
]


const recentNews: RecentNews[] | null = [
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
    {
        propertyType: "Office",
        date: "20th March 2024",
        title: "This house is for sale",
        url: "#",
        imageUrl: "#"
    },
]

const Landing = () => {
    const theme = useTheme()

    return (
        <>
            <ShadowBox1>
                <Navbar />

                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="h6" component="p" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                                    FIND YOUR <span style={{ color: '#FF5A5F' }}>DREAM HOME</span>
                                </Typography>
                                <Typography variant="h6" component="p" color="textSecondary" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                                    LIVE YOUR <span style={{ color: '#FF5A5F' }}>BEST LIFE</span>
                                </Typography>

                                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }} >
                                    Explore the Best Properties, from City Skylines to Cozy Suburbs
                                    <span style={{
                                        display: 'block',
                                        height: '5px',
                                        backgroundColor: '#FF5A5F',
                                        width: '100px',
                                        marginTop: '10px'
                                    }}></span>
                                </Typography>

                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: '1.8' }}>
                                    Whether buying, selling, or renting, we make finding your perfect home simple and stress-free.
                                    Explore a wide range of properties, from cozy apartments to luxury estates.
                                    With our expert support and user-friendly tools, your dream home is just a few clicks away.
                                    Start your journey to better living today.
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}><img src={familyImage} alt="family image" style={{ width: '100%', marginBottom: '1rem' }} />
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div style={{ padding: '2rem' }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '5px', lineHeight: '1.2' }} >
                        We Provide
                    </Typography>
                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                        Property <span style={{ color: "black" }}> Types</span>
                    </Typography>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {cardData.map((item, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                                        <CardContent>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img src={item.imageUrl} alt={item.title} style={{ height: '200px', marginBottom: '1rem' }}
                                                />
                                            </div>
                                            <Typography variant="h6" align="center">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" align="center" color="textSecondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <img src={robotImage} alt="Robot image" style={{ maxHeight: "300px" }} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="h5" component="p" sx={{ fontWeight: 'bold' }}>
                                    FIND YOUR <span style={{ color: '#FF5A5F' }}>DREAM HOME</span>
                                </Typography>
                                <List>
                                    {propertyFinder.map((property, index) => (
                                        <ListItem disablePadding key={index}>
                                            <ListItemIcon>
                                                <StarIcon color='primary' />
                                            </ListItemIcon>
                                            <ListItemText primary={property} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button
                                    variant="contained"
                                    sx={{ marginTop: 2 }}
                                    component={Link}
                                    to="/smart-price-finder"
                                >
                                    Smart Price Finder
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </ShadowBox1>

            <ShadowBox2>
                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} >
                            Popular locations
                        </Typography>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {popularLocations.map((location, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia sx={{ height: 250 }} image={location.imageUrl} title="location" />
                                        <CardContent>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{location.address}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                <div style={{ padding: '2rem' }}>
                    <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '5px', lineHeight: '1.2' }} >
                        Recent News
                    </Typography>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {recentNews.map((news, index) => (
                                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardMedia component="img" alt="News thumbnail" height="160" image={news.imageUrl} />
                                        <CardContent>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }} my={2}>
                                                {news.propertyType} . {news.date}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" m={0} component="div">
                                                {news.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </ShadowBox2>

            <Footer />
        </>
    )
}

export default Landing
