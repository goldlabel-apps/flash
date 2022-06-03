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
  Icon,
} from './'
import {
  Box,
  IconButton,
} from '@mui/material'

// let displayText = `${flash.data.pJSON.name} ${flash.data.pJSON.version}`

export default function Stage() {
  const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  React.useEffect(() => {
    const { started } = flash.data
    if (!started){
      setTimeout(() => {
        textAS("init")
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
    postition: "relative",
  }
  
  return <Box id="stage" sx={ stageStyle }>

            <Box id="flashMenu" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex: 1000, 
              width: 50, 
              height: 50,
              top: 8,
              right: 8,
            }}><FlashMenu /></Box>

            <Box id="timemachine" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex: 150,
              width: 149, 
              height: 188,
            }}><Timemachine /></Box>

            <Box id="text" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex:100, 
              width: 350, 
              height: 75,
            }}><Text /></Box>

            <Box id="prev" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex:10001, 
              bottom: 8,
              left: 8,
              width: 50, 
              height: 50,
            }}>
              <IconButton
                color="primary"
                size="large"
              >
                <Icon icon="arrowl" />
              </IconButton>
            </Box>

            <Box id="next" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex:10002, 
              bottom: 8,
              right: 8,
              width: 50, 
              height: 50,
            }}>
              <IconButton
                color="primary"
                size="large"
              >
                <Icon icon="arrowr" />
              </IconButton>
            </Box>


          </Box>
}
