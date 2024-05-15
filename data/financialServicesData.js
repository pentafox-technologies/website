import { Box, Center, Image } from "@mantine/core"
import React from 'react'

export const data = [
  {
    identifier: 'LOS',
    points: [
      {
        title: '10000+',
        subText: 'KYC'
      },
      {
        title: '1000+',
        subText: 'Credit Checks'
      },
      {
        title: '100%',
        subText: 'Digital (end-to-end)'
      },
      {
        title: (
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span>
              40%
            </span>
            <Center ml={8}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="23" height="24" viewBox="0 0 24 24" stroke-width="2.3" stroke="green" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 5l0 14"></path>
                <path d="M18 11l-6 -6"></path>
                <path d="M6 11l6 -6"></path>
              </svg>
            </Center>
          </Box>
        ),
        subText: 'in Operational efficiency'
      }
    ],
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
    identifier: 'LMS',
    points: [
      {
        title: '1000+',
        subText: 'Disbursements'
      },
      {
        title: '1400+',
        subText: 'Crores<br/>loans processed'
      },
      {
        title: '1000+',
        subText: 'Active B2B2C Users'
      },
    ],
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image src='https://i.imgur.com/XyllIFX.png' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'WKYC',
    points: [
      {
        title: '< 2',
        subText: 'Mins <br/>to onboard a customer'
      },
      {
        title: '100+',
        subText: 'Intelligent workflows <br/>for all business use cases'
      },
    ],
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/OO4jva5.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/rQ73v31.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'BI',
    points: [
      {
        title: '100+',
        subText: 'live KPIs'
      },
      {
        title: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-check"
            width="12%"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#c23232"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        ),
        subText: 'Sub second reporting capability'
      }
    ],
    image: (
      <Box sx={{position: 'relative', minHeight: 200}}>
        <Box>
          <Image className="main-image" src='https://i.imgur.com/sDzx7z3.png' sx={{position: 'absolute', zIndex: 1}} width= '70%' />
        </Box>
        <Box>
          <Image src='https://i.imgur.com/XSff7bu.png' sx={{position: 'absolute', zIndex: 2, transform: 'translateX(57%) translateY(70%)'}} width= '70%'  />
        </Box>
        <Box>
          <Image src='https://i.imgur.com/fyj3AL4.png' sx={{position: 'absolute', transform: 'translateX(-6%) translateY(110%)' }} width= '70%' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'CLMS',
    points: [
      {
        title: '10 Mn+',
        subText: 'Documents processed and managed'
      }
    ],
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className="secondary-image" src='https://i.imgur.com/1uO3PaR.png' width={'80%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'INV',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className="main-image" src='https://i.imgur.com/cFdcdQC.png' width={'80%'} />
        </Box>
      </Box>
    )
  },
]