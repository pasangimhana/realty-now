import { useState } from 'react'
import { Box, Card, CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid2'

interface Props {
    imgUrls: string[]
}

const ImageGallery = ({ imgUrls }: Props) => {
    const [displayingImage, setDsiplayingImage] = useState<string>(imgUrls[0])

    const changeDisplayingImage = (imageUrl: string) => {
        setDsiplayingImage(imageUrl)
    }


    return (
        <>
            <Box borderRadius={1} minWidth={420}>
                <Card sx={{ mb: 2 }}>
                    <CardMedia
                        component="img"
                        height="360"
                        image={displayingImage}
                        alt="Main Image"
                    />
                </Card>
                <Grid container spacing={2}>
                    {imgUrls.map((image, index) => (
                        <Grid size={{ xs: 3 }} key={index}>
                            <Card>
                                <CardMedia
                                    onClick={() => changeDisplayingImage(image)}
                                    component="img"
                                    height="100"
                                    image={image}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default ImageGallery