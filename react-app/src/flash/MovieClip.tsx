import * as React from 'react';
import { 
  FlashMenu,
  getDisplay,
  Text,
  Timemachine,
} from './'
import {
  Box,
} from '@mui/material'

export interface MovieClipShape {
    id: string,
}

export default function MovieClip(props: MovieClipShape) {

  const display = getDisplay()
  //@ts-ignore
  const { displayW, displayH } = display
  
  const moviclipStyle = {
    width: displayW,
    height: displayH,
    zIndex: 1,
    overflow: "hidden",
    postition: "relative",
  }
  
  return <Box id="stage" sx={ moviclipStyle }>

            kahsfsof

          </Box>
}
