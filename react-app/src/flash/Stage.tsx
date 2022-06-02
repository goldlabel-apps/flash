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
  TextClip,
  intro,
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
        intro()
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
    textAlign: 'center',
    zIndex: 1,
    postition: "relative",
  }
  
  return <Box id="stage" sx={ stageStyle }>

          <Box id="flashMenu" sx={{ 
              opacity: 0, 
              position: "absolute",
              zIndex: 1000, 
              width: 50, 
              height: 50, 
            }}>
              <FlashMenu />
          </Box>


          <Box id="textClip" sx={{ 
              opacity: 0, 
              position: "absolute",
              zIndex:100, 
              width: 350, 
              height: 75, 
            }}>
              <TextClip />
            </Box>

          </Box>
}

/*

TextClip


            <Box id="mumma" sx={{ 
              opacity: 0, 
              top: 50,
              right: 50,
              position: "absolute",
              zIndex:1250, 
              width: 100, 
              height: 200,
             }}>
              <Mumma />
            </Box>
*/