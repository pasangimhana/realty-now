import Navbar from '../../components/navbar'
import { Card, CardContent, Container, Typography, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Footer from '../../components/footer'
import ShadowBox1 from '../../components/shadowBox/box1'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

interface SuburbStat {
    suburb: string;
    median_price: number;
    avg_rooms: number;
    avg_bathrooms: number;
}

const SmartPriceFinder = () => {
    // Replace filters with actual model parameters
    const [rooms, setRooms] = useState<number>(0)
    const [bathroom, setBathroom] = useState<number>(0)
    const [car, setCar] = useState<number>(0)
    const [landsize, setLandsize] = useState<number>(0)
    const [suburb, setSuburb] = useState<number>(-1)  // Changed to number type
    const [price, setPrice] = useState<string>('$ 0')
    const [historicalPrices, setHistoricalPrices] = useState<Array<{year: number, median_price: number}>>([])
    const [suburbStats, setSuburbStats] = useState<SuburbStat[]>([])
    const [selectedMetric, setSelectedMetric] = useState<'median_price' | 'avg_rooms' | 'avg_bathrooms'>('median_price')
    const [topN, setTopN] = useState<number>(10)

    // Get token from Redux store
    const token = useSelector((state: RootState) => state.auth.token)

    const suburbsMap =  {'Abbotsford': 0, 'Aberfeldie': 1, 'Airport West': 2, 'Albanvale': 3, 'Albert Park': 4, 'Albion': 5, 'Alphington': 6, 'Altona': 7, 'Altona Meadows': 8, 'Altona North': 9, 'Ardeer': 10, 'Armadale': 11, 'Ascot Vale': 12, 'Ashburton': 13, 'Ashwood': 14, 'Aspendale': 15, 'Aspendale Gardens': 16, 'Attwood': 17, 'Avondale Heights': 18, 'Bacchus Marsh': 19, 'Balaclava': 20, 'Balwyn': 21, 'Balwyn North': 22, 'Bayswater': 23, 'Bayswater North': 24, 'Beaconsfield': 25, 'Beaconsfield Upper': 26, 'Beaumaris': 27, 'Bellfield': 28, 'Bentleigh': 29, 'Bentleigh East': 30, 'Berwick': 31, 'Black Rock': 32, 'Blackburn': 33, 'Blackburn North': 34, 'Blackburn South': 35, 'Bonbeach': 36, 'Boronia': 37, 'Botanic Ridge': 38, 'Box Hill': 39, 'Braybrook': 40, 'Briar Hill': 41, 'Brighton': 42, 'Brighton East': 43, 'Broadmeadows': 44, 'Brookfield': 45, 'Brooklyn': 46, 'Brunswick': 47, 'Brunswick East': 48, 'Brunswick West': 49, 'Bulleen': 50, 'Bullengarook': 51, 'Bundoora': 52, 'Burnley': 53, 'Burnside': 54, 'Burnside Heights': 55, 'Burwood': 56, 'Burwood East': 57, 'Cairnlea': 58, 'Camberwell': 59, 'Campbellfield': 60, 'Canterbury': 61, 'Carlton': 62, 'Carlton North': 63, 'Carnegie': 64, 'Caroline Springs': 65, 'Carrum': 66, 'Carrum Downs': 67, 'Caulfield': 68, 'Caulfield East': 69, 'Caulfield North': 70, 'Caulfield South': 71, 'Chadstone': 72, 'Chelsea': 73, 'Chelsea Heights': 74, 'Cheltenham': 75, 'Chirnside Park': 76, 'Clarinda': 77, 'Clayton': 78, 'Clayton South': 79, 'Clifton Hill': 80, 'Coburg': 81, 'Coburg North': 82, 'Collingwood': 83, 'Coolaroo': 84, 'Craigieburn': 85, 'Cranbourne': 86, 'Cranbourne North': 87, 'Cremorne': 88, 'Croydon': 89, 'Croydon Hills': 90, 'Croydon North': 91, 'Croydon South': 92, 'Dallas': 93, 'Dandenong': 94, 'Dandenong North': 95, 'Deepdene': 96, 'Deer Park': 97, 'Delahey': 98, 'Derrimut': 99, 'Diamond Creek': 100, 'Diggers Rest': 101, 'Dingley Village': 102, 'Doncaster': 103, 'Doncaster East': 104, 'Donvale': 105, 'Doreen': 106, 'Doveton': 107, 'Eaglemont': 108, 'East Melbourne': 109, 'Edithvale': 110, 'Elsternwick': 111, 'Eltham': 112, 'Eltham North': 113, 'Elwood': 114, 'Emerald': 115, 'Endeavour Hills': 116, 'Epping': 117, 'Essendon': 118, 'Essendon North': 119, 'Essendon West': 120, 'Fairfield': 121, 'Fawkner': 122, 'Ferntree Gully': 123, 'Fitzroy': 124, 'Fitzroy North': 125, 'Flemington': 126, 'Footscray': 127, 'Forest Hill': 128, 'Frankston': 129, 'Frankston North': 130, 'Frankston South': 131, 'Gardenvale': 132, 'Gisborne': 133, 'Gisborne South': 134, 'Gladstone Park': 135, 'Glen Huntly': 136, 'Glen Iris': 137, 'Glen Waverley': 138, 'Glenroy': 139, 'Gowanbrae': 140, 'Greensborough': 141, 'Greenvale': 142, 'Hadfield': 143, 'Hallam': 144, 'Hampton': 145, 'Hampton East': 146, 'Hampton Park': 147, 'Hawthorn': 148, 'Hawthorn East': 149, 'Healesville': 150, 'Heathmont': 151, 'Heidelberg': 152, 'Heidelberg Heights': 153, 'Heidelberg West': 154, 'Highett': 155, 'Hillside': 156, 'Hoppers Crossing': 157, 'Hughesdale': 158, 'Huntingdale': 159, 'Hurstbridge': 160, 'Ivanhoe': 161, 'Ivanhoe East': 162, 'Jacana': 163, 'Kealba': 164, 'Keilor': 165, 'Keilor Downs': 166, 'Keilor East': 167, 'Keilor Lodge': 168, 'Keilor Park': 169, 'Kensington': 170, 'Kew': 171, 'Kew East': 172, 'Keysborough': 173, 'Kilsyth': 174, 'Kings Park': 175, 'Kingsbury': 176, 'Kingsville': 177, 'Knoxfield': 178, 'Kooyong': 179, 'Kurunjang': 180, 'Lalor': 181, 'Langwarrin': 182, 'Lower Plenty': 183, 'Lysterfield': 184, 'Maidstone': 185, 'Malvern': 186, 'Malvern East': 187, 'Maribyrnong': 188, 'McKinnon': 189, 'Meadow Heights': 190, 'Melbourne': 191, 'Melton': 192, 'Melton South': 193, 'Melton West': 194, 'Mentone': 195, 'Mernda': 196, 'Mickleham': 197, 'Middle Park': 198, 'Mill Park': 199, 'Mitcham': 200, 'Mont Albert': 201, 'Montmorency': 202, 'Montrose': 203, 'Moonee Ponds': 204, 'Moorabbin': 205, 'Mooroolbark': 206, 'Mordialloc': 207, 'Mount Evelyn': 208, 'Mount Waverley': 209, 'Mulgrave': 210, 'Murrumbeena': 211, 'Narre Warren': 212, 'Newport': 213, 'Niddrie': 214, 'Noble Park': 215, 'North Melbourne': 216, 'North Warrandyte': 217, 'Northcote': 218, 'Notting Hill': 219, 'Nunawading': 220, 'Oak Park': 221, 'Oakleigh': 222, 'Oakleigh East': 223, 'Oakleigh South': 224, 'Officer': 225, 'Ormond': 226, 'Pakenham': 227, 'Parkdale': 228, 'Parkville': 229, 'Pascoe Vale': 230, 'Patterson Lakes': 231, 'Plumpton': 232, 'Point Cook': 233, 'Port Melbourne': 234, 'Prahran': 235, 'Preston': 236, 'Princes Hill': 237, 'Research': 238, 'Reservoir': 239, 'Richmond': 240, 'Riddells Creek': 241, 'Ringwood': 242, 'Ringwood East': 243, 'Ringwood North': 244, 'Ripponlea': 245, 'Rosanna': 246, 'Rowville': 247, 'Roxburgh Park': 248, 'Sandhurst': 249, 'Sandringham': 250, 'Scoresby': 251, 'Seabrook': 252, 'Seaford': 253, 'Seaholme': 254, 'Seddon': 255, 'Skye': 256, 'South Kingsville': 257, 'South Melbourne': 258, 'South Morang': 259, 'South Yarra': 260, 'Southbank': 261, 'Spotswood': 262, 'Springvale': 263, 'Springvale South': 264, 'St Albans': 265, 'St Helena': 266, 'St Kilda': 267, 'Strathmore': 268, 'Strathmore Heights': 269, 'Sunbury': 270, 'Sunshine': 271, 'Sunshine North': 272, 'Sunshine West': 273, 'Surrey Hills': 274, 'Sydenham': 275, 'Tarneit': 276, 'Taylors Hill': 277, 'Taylors Lakes': 278, 'Templestowe': 279, 'Templestowe Lower': 280, 'The Basin': 281, 'Thomastown': 282, 'Thornbury': 283, 'Toorak': 284, 'Travancore': 285, 'Truganina': 286, 'Tullamarine': 287, 'Upwey': 288, 'Vermont': 289, 'Vermont South': 290, 'Viewbank': 291, 'Wallan': 292, 'Wantirna': 293, 'Wantirna South': 294, 'Warrandyte': 295, 'Waterways': 296, 'Watsonia': 297, 'Watsonia North': 298, 'Wattle Glen': 299, 'Werribee': 300, 'West Footscray': 301, 'West Melbourne': 302, 'Westmeadows': 303, 'Wheelers Hill': 304, 'Whittlesea': 305, 'Williams Landing': 306, 'Williamstown': 307, 'Williamstown North': 308, 'Windsor': 309, 'Wollert': 310, 'Wyndham Vale': 311, 'Yallambie': 312, 'Yarra Glen': 313, 'Yarraville': 314}

    useEffect(() => {
        const fetchHistoricalPrices = async () => {
            try {
                const response = await fetch('http://localhost:8000/historical-prices', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'accept': 'application/json'
                    }
                })
                const data = await response.json()
                console.log('Received data:', data) // Add this line
                setHistoricalPrices(data)
            } catch (error) {
                console.error('Error fetching historical prices:', error)
            }
        }

        // Only fetch if token exists
        if (token) {
            fetchHistoricalPrices()
        }
    }, [token]) // Add token as dependency

    useEffect(() => {
        const fetchSuburbStats = async () => {
            try {
                const response = await fetch('http://localhost:8000/suburb-stats', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'accept': 'application/json'
                    }
                })
                const data = await response.json()
                setSuburbStats(data)
            } catch (error) {
                console.error('Error fetching suburb stats:', error)
            }
        }

        if (token) {
            fetchSuburbStats()
        }
    }, [token])

    const getFilteredData = () => {
        return [...suburbStats]
            .sort((a, b) => b[selectedMetric] - a[selectedMetric])
            .slice(0, topN)
    }

    const suburbStatsChartData = {
        labels: getFilteredData().map(stat => stat.suburb),
        datasets: [
            {
                label: selectedMetric === 'median_price' 
                    ? 'Median Price ($)' 
                    : selectedMetric === 'avg_rooms' 
                        ? 'Average Rooms'
                        : 'Average Bathrooms',
                data: getFilteredData().map(stat => stat[selectedMetric]),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }
        ]
    }

    const suburbStatsChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Suburb Statistics'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(tickValue: number | string) {
                        const value = Number(tickValue);
                        return selectedMetric === 'median_price' 
                            ? `$${value.toLocaleString()}`
                            : value.toFixed(1);
                    }
                }
            }
        }
    }

    const chartData = {
        labels: Array.isArray(historicalPrices) ? historicalPrices.map(item => item.year) : [],
        datasets: [
            {
                label: 'Median House Prices',
                data: Array.isArray(historicalPrices) ? historicalPrices.map(item => item.median_price) : [],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Historical Median House Prices'
            }
        }
    }

    // Add this function before the return statement
    const calculatePrice = async () => {
        try {
            const response = await fetch('http://localhost:8000/predict', {  // Changed from /predict-price to /predict
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    rooms: Number(rooms),          // Ensure numbers are sent
                    bathroom: Number(bathroom),    // Ensure numbers are sent
                    car: Number(car),             // Ensure numbers are sent
                    landsize: Number(landsize),    // Ensure numbers are sent
                    suburb_encoded: Number(suburb) // Changed from suburb to suburb_encoded to match API
                })
            });
            const data = await response.json();
            // Assuming the API returns the predicted price directly
            setPrice(`$ ${Math.round(data.predicted_price).toLocaleString()}`); // Added Math.round for cleaner display
        } catch (error) {
            console.error('Error calculating price:', error);
        }
    };

    return (
        <>
            <ShadowBox1>
                <Navbar />

                <div style={{ padding: '2rem' }}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center" my={4}>
                            {/* Left side: Charts stacked vertically */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                {historicalPrices.length > 0 && (
                                    <Card style={{ padding: "20px", marginBottom: "20px" }}>
                                        <Line options={chartOptions} data={chartData} />
                                    </Card>
                                )}

                                {suburbStats.length > 0 && (
                                    <Card style={{ padding: "20px" }}>
                                        <Stack spacing={2} direction="row" mb={2}>
                                            <FormControl size="small" style={{ minWidth: 150 }}>
                                                <InputLabel>Metric</InputLabel>
                                                <Select
                                                    value={selectedMetric}
                                                    label="Metric"
                                                    onChange={(e) => setSelectedMetric(e.target.value as typeof selectedMetric)}
                                                >
                                                    <MenuItem value="median_price">Median Price</MenuItem>
                                                    <MenuItem value="avg_rooms">Average Rooms</MenuItem>
                                                    <MenuItem value="avg_bathrooms">Average Bathrooms</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                type="number"
                                                label="Top N Suburbs"
                                                size="small"
                                                value={topN}
                                                onChange={(e) => setTopN(Number(e.target.value))}
                                                inputProps={{ min: 1, max: 50 }}
                                            />
                                        </Stack>
                                        <Line options={suburbStatsChartOptions} data={suburbStatsChartData} />
                                    </Card>
                                )}
                            </Grid>

                            {/* Right side: Calculator */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card style={{ minWidth: 400, padding: "10px 5px", margin: "0 auto", height: "100%" }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" mb={4}>
                                            Price Calculator
                                        </Typography>

                                        <Grid container spacing={2}>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    label="Number of Rooms"
                                                    value={rooms}
                                                    onChange={(e) => setRooms(Number(e.target.value))}
                                                    inputProps={{ min: 0 }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    label="Number of Bathrooms"
                                                    value={bathroom}
                                                    onChange={(e) => setBathroom(Number(e.target.value))}
                                                    inputProps={{ min: 0 }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    label="Car Spaces"
                                                    value={car}
                                                    onChange={(e) => setCar(Number(e.target.value))}
                                                    inputProps={{ min: 0 }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    label="Land Size (m²)"
                                                    value={landsize}
                                                    onChange={(e) => setLandsize(Number(e.target.value))}
                                                    inputProps={{ min: 0 }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }} >
                                                <Autocomplete
                                                    fullWidth
                                                    options={Object.keys(suburbsMap)}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Suburb"
                                                            variant="outlined"
                                                        />
                                                    )}
                                                    value={suburb === -1 ? null : Object.keys(suburbsMap).find(
                                                        key => suburbsMap[key as keyof typeof suburbsMap] === suburb
                                                    ) || null}
                                                    onChange={(_, newValue) => {
                                                        if (newValue) {
                                                            setSuburb(suburbsMap[newValue as keyof typeof suburbsMap])
                                                        } else {
                                                            setSuburb(-1)
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 12 }}>
                                                <Typography variant="h4" align="center" gutterBottom>
                                                    Estimated Price
                                                </Typography>
                                                <Typography 
                                                    variant="h3" 
                                                    align="center"
                                                    sx={{
                                                        backgroundColor: 'primary.light',
                                                        padding: 2,
                                                        borderRadius: 1,
                                                        color: 'white'
                                                    }}
                                                >
                                                    {price}
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 12 }}>
                                                <Button 
                                                    type="submit" 
                                                    variant="contained" 
                                                    color="primary" 
                                                    fullWidth
                                                    onClick={calculatePrice}
                                                    disabled={suburb === -1}
                                                >
                                                    Calculate price
                                                </Button>
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
