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
    const primaryColor = theme.palette.text.primary
    const secondaryColor = theme.palette.text.secondary
    const flash = useAppSelector(selectFlash)
    const { screens, index } = flash.data
    const { title, subheader } = screens[index]

    return <Box sx={{ width: 350, height: 50, textAlign:"center"}}>
                <Typography variant="h4" gutterBottom sx={{ 
                    fontWeight:"lighter", 
                    color: primaryColor 
                }}>
                    { title }
                </Typography>
                <Typography variant="h5" sx={{ 
                    fontWeight:"lighter",
                    color: secondaryColor
                 }}>
                    { subheader }
                </Typography>
            </Box>
}

export default Text
