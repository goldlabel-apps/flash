import React from 'react'
import { SkeletonVariants } from './'

export default function Flash() {

  return (
    <div>
      <h1 style={{fontWeight: "lighter"}}>Skip Intro</h1>
      
      
      <SkeletonVariants />

      <a href="https://github.com/listingslab/flash" target="_blank" rel="noreferrer">
        GitHub
      </a>

    </div>
  )
}
