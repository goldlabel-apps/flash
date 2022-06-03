import * as React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from './_app/hooks'
import { 
  FlashMenu,
  selectFlash,
  setFlash,
  Text,
  textAS,
  Icon,
  getDisplay,
} from './'
import {
  Box,
  IconButton,
} from '@mui/material'

export default function Stage() {
  const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  const { display, showFlashMenu, showPrevNext } = flash.data
  
  React.useEffect(() => {
    const { started, display } = flash.data
    if (!display){
      dispatch(setFlash({key: "display", value: getDisplay() }))
    }
    if (!started){
      setTimeout(() => {
        textAS("init")
        dispatch(setFlash({key: "started", value: true }))
      }, 333)
    }
  }, [flash, dispatch])
  if (!display) return null  
  const { displayW, displayH } = display
  
  const stageStyle = {
    width: displayW,
    height: displayH,
    zIndex: 1,
    postition: "relative",
  }

  return <Box id="stage" sx={ stageStyle }>

              <Box id="debugger" sx={{
                zIndex: 123456,
                position: "absolute",
                
              }}>
                <pre>{JSON.stringify( flash.data.display, null, 2 )}</pre>
              </Box>

              <Box id="text" sx={{
                opacity: 0, 
                position: "absolute",
                zIndex:100, 
                width: 350, 
                height: 100,
              }}><Text /></Box>
            
            { showFlashMenu ? <Box id="flashMenu" sx={{ 
              opacity: 1, 
              position: "absolute",
              zIndex: 100023, 
              width: 50, 
              height: 50,
              top: 8,
              right: 8,
            }}><FlashMenu /></Box> : null }

            

            { showPrevNext ? <React.Fragment>
                              <Box id="prev" sx={{ 
                                opacity: 1, 
                                position: "absolute",
                                zIndex:10001, 
                                bottom: 8,
                                left: 8,
                                width: 50, 
                                height: 50,
                              }}>
                                <IconButton color="primary" size="large" >
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
                                <IconButton color="primary" size="large">
                                  <Icon icon="arrowr" />
                                </IconButton>
                              </Box>
                            </React.Fragment> : null }
          </Box>
}
