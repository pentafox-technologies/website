import { Box, Image } from "@mantine/core";
import React from "react";

export const caseStudyData = [
  {
    identifier: 'MyR',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/WwpcvzL.png' width={'70%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/tQNjciI.png' width={'70%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'LOS',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/OrnQSTB.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'ATMBL',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/OrnQSTB.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'MKTNG',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          width={'80%'}
          src='https://i.imgur.com/ESmbuVG.png' />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/3V1Vmb6.png' width={'80%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'ECOM',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/OrnQSTB.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'EDTCH',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/OrnQSTB.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'ENTMT',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/OrnQSTB.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
        </Box>
      </Box>
    )
  },
]