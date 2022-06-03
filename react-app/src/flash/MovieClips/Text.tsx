import React from 'react'
import { useAppSelector } from "../_app/hooks";
import { selectFlash} from "../"

import { 
    useTheme, 
    Box,
    Typography,
} from '@mui/material'

const Text = () => {
    const theme = useTheme()
    const primaryColor = theme.palette.primary.main
    // const secondaryColor = theme.palette.secondary.main
    const flash = useAppSelector(selectFlash)
    const { text } = flash.data
    const { title, subheader } = text

    return <Box sx={{ width: 350, height: 50, textAlign:"center"}}>
                <Typography variant="h4" gutterBottom sx={{ 
                    fontWeight:"lighter", 
                    color: primaryColor 
                }}>
                    { title }
                </Typography>
                <Typography variant="h5" sx={{ 
                    fontWeight:"lighter",
                 }}>
                    { subheader }
                </Typography>
            </Box>
}

export default Text
