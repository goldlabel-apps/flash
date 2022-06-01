import React from 'react'
import { store } from './app/store'
import {
  createTheme, 
  ThemeProvider,
  CssBaseline,
} from '@mui/material'
import { Provider } from 'react-redux'
import { getDesignTokens } from './theme'
import { Stage } from './'

export default function Flash() {
  
  const theme = createTheme(getDesignTokens('light'))

  return ( <Provider store={store}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />  
                  <Stage />
              </ThemeProvider>
          </Provider>
  )
}







/*

Skip Intro</Typography>
      

<Typography variant="h6" gutterBottom style={{fontWeight: "lighter"}}>
                        Flash!</Typography>
                    <Typography variant="body2" gutterBottom>
                      Flash by name, Flash by nature bruv</Typography>

                      <Button 
                        color="secondary"
                        variant="contained"
                        onClick={()=>{}}  
                      >
                        Skip Intro
                      </Button>

                      
      <Button href="https://listingslab.com/flash" target="_blank" rel="noreferrer">
        flash
      </Button>

      <Button 
        variant="contained"
        href="https://github.com/listingslab/flash" target="_blank" rel="noreferrer">
        GitHub
      </Button>
*/