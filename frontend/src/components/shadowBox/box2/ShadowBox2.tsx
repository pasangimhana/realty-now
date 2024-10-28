import React from 'react'
import { Box } from '@mui/material'

interface Props {
    children: React.ReactNode
}

const ShadowBox2 = ({ children }: Props) => {
    return (
        <Box
            sx={{
                minHeight: '100%',
                background: `linear-gradient(
            45deg, 
            rgba(255, 150, 50, 0.2) 0%, 
            rgba(255, 255, 255, 1) 30%, 
            rgba(255, 255, 255, 1) 75%, 
            rgba(255, 90, 95, 0.2) 100%
          )`,
                backdropFilter: 'blur(5px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto'
            }}
        >
            {children}
        </Box>
    )
}

export default ShadowBox2