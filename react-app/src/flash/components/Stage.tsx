import * as React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks'
import { 
  selectFlash,
  setFlash,
  getDisplay,
  PinpongballClip,
  bouncePingpongball,
} from '../'
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
        bouncePingpongball()
        dispatch(setFlash({key: "started", value: true }))
      }, 10)
    }
}, [flash, dispatch])

  const display = getDisplay()
  //@ts-ignore
  const { displayW, displayH } = display
  const movieStyle = {
    width: displayW,
    height: displayH,
    textAlign: 'center',
    zIndex: 1,
  }
  
  return <Box id="stage" sx={ movieStyle }>
            <Box id="pingpongball" sx={{ opacity:0, width: 100, height: 100 }}>
              <PinpongballClip />
            </Box>
          </Box>
}
