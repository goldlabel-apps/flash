import React from 'react'

import {
 Box,
 Button,
} from '@mui/material'

import { SkeletonVariants } from './'


export default function Flash() {

  return (
    <Box>
      <h1 style={{fontWeight: "lighter"}}>Skip Intro</h1>
      
      
      
      <Button href="https://listingslab.com/flash" target="_blank" rel="noreferrer">
        flash
      </Button>

      <Button 
        variant="contained"
      href="https://github.com/listingslab/flash" target="_blank" rel="noreferrer">
        GitHub
      </Button>

      <SkeletonVariants />

    </Box>
  )
}
