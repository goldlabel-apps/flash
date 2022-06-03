import * as React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from './_app/hooks'
import { 
  FlashMenu,
  selectFlash,
  setFlash,
  getDisplay,
  Text,
  Timemachine,
  textAS,
} from './'
import {
  Box,
} from '@mui/material'

export default function Stage() {
  const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  React.useEffect(() => {
    const { started } = flash.data
    if (!started){
      setTimeout(() => {
        textAS()
        dispatch(setFlash({key: "started", value: true }))
      }, 333)
    }
}, [flash, dispatch])

  const display = getDisplay()
  //@ts-ignore
  const { displayW, displayH } = display
  
  const stageStyle = {
    width: displayW,
    height: displayH,
    zIndex: 1,
    overflow: "hidden",
    postition: "relative",
  }
  
  return <Box id="stage" sx={ stageStyle }>

            <Box id="flashMenu" sx={{ 
              opacity: 0, 
              position: "absolute",
              zIndex: 1000, 
              width: 50, 
              height: 50,
            }}><FlashMenu /></Box>

            <Box id="timemachine" sx={{ 
              opacity: 0, 
              position: "absolute",
              zIndex: 150,
              width: 149, 
              height: 188,
            }}><Timemachine /></Box>

            <Box id="text" sx={{ 
              opacity: 0, 
              position: "absolute",
              zIndex:100, 
              width: 350, 
              height: 75,
            }}><Text /></Box>

          </Box>
}
