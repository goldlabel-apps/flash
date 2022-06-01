import * as React from 'react';
import {
  // useAppDispatch,
  useAppSelector,
} from '../app/hooks'
import { selectFlash } from '../'
import {
  Box,
} from '@mui/material'

export default function Stage() {

  // const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  console.log ("flash", flash)
  // const onPingopongballClick = () => {
  //   return true
  // }

  return <Box>
    
    
    <Box 
      id="pingpongbll"

    >
      pingpongbll
    </Box>


  </Box>
}
