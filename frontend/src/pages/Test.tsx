import React, { useState } from 'react'
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import DynamicIcon from '../components/dynamicIcon/DynamicIcon'


const Test = () => {
    const [displayingImage, setDsiplayingImage] = useState<string>("")
    const thumbnails = [
        'logo512.png',
        'robot.png',
        'residential_property.png',
        'commerical_property.png',
    ]

    const changeDisplayingImage = (imageUrl: string) => {
        setDsiplayingImage(imageUrl)
    }

    return (
        <>
            <DynamicIcon iconName='Home'  sx={{ fontSize: 54 }} color='primary'/>
        </>
    )
}

export default Test
