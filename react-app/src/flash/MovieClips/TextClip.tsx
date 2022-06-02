import React from 'react'
import { useAppSelector } from "../_app/hooks";
import { selectFlash} from "../"

import { 
    useTheme, 
    Box,
    Typography,
} from '@mui/material'

const TextClip = (props: any) => {
    const theme = useTheme()
    const primaryColor = theme.palette.primary.main

    const flash = useAppSelector(selectFlash)
    // console.log("flash", flash)
    let displayText = "undefined. knobber."
    const { currentText } = flash.data
    if (currentText) displayText = currentText

    return <Box sx={{ width: 350, height: 75}}>
                <Typography variant="h4" sx={{ fontWeight:"lighter", color: primaryColor }}>
                    { displayText }
                </Typography>
            </Box>
}

export default TextClip
