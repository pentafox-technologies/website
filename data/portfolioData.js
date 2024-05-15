import { Box, Image } from "@mantine/core";
import React from "react";

export const caseStudyData = [
  {
    identifier: 'LOS-APP',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/wWUFXm9.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/MGJEMh6.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  // {
    //   identifier: 'LOS',
    //   image: (
      //     <Box sx={{position: 'relative'}}>
      //       <Box>
      //         <Image 
      //         className='main-image'
      //         src='https://i.imgur.com/WmbfDr9.png' />
      //       </Box>
      //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
      //         <Image 
      //         className='secondary-image'
      //         src='https://i.imgur.com/TWUvZYP.png' width={'50%'} fit='cover' />
      //       </Box>
      //     </Box>
      //   )
      // },
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
    identifier: 'MyR-APP',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/jx4VDjZ.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/LnslkdU.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'EMR-APP',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/8xenDMx.png' width={'70%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/EQkIvYY.png' width={'70%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'KVB-APP',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/IN0DW7O.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/VUNgemI.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'DSK',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/z4gYdnZ.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/bQlI159.png' width={'80%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'ARY-PULS',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/6MVLMlD.png' />
        </Box>
        <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/c5KrD5W.png' width={'80%'} fit='cover' />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'SURJ-CONSL',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          src='https://i.imgur.com/PbLb6ub.png' />
        </Box>
        {/* <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/c5KrD5W.png' width={'80%'} fit='cover' />
        </Box> */}
      </Box>
    )
  },
  // {
  //   identifier: 'ATMBL',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         src='https://i.imgur.com/OrnQSTB.png' />
  //       </Box>
  //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
  // {
  //   identifier: 'MKTNG',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         width={'80%'}
  //         src='https://i.imgur.com/ESmbuVG.png' />
  //       </Box>
  //       <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/3V1Vmb6.png' width={'80%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
  // {
  //   identifier: 'ECOM',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         src='https://i.imgur.com/OrnQSTB.png' />
  //       </Box>
  //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
  // {
  //   identifier: 'EDTCH',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         src='https://i.imgur.com/OrnQSTB.png' />
  //       </Box>
  //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
  // {
  //   identifier: 'ENTMT',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         src='https://i.imgur.com/OrnQSTB.png' />
  //       </Box>
  //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
]

export const cloudEngineering = [
  // {
  //   identifier: 'MyR',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image className='main-image' src='https://i.imgur.com/WwpcvzL.png' width={'70%'} />
  //       </Box>
  //       <Box>
  //         <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/tQNjciI.png' width={'70%'} />
  //       </Box>
  //     </Box>
  //   )
  // },
  {
    identifier: 'MyR',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/jx4VDjZ.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/LnslkdU.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'MSSQL',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://cxl.com/wp-content/uploads/2019/10/google-bigquery-logo-1-1024x577.png' width={'70%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://www.livetolearn.in/images/site/blog/ms%20sql%20server.png' width={'70%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'AZ-EKS',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/fAEW5Ct.png' width={'90%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 120, left: '60%'}} className='secondary-image' src='https://i.imgur.com/2yfW1f5.png' width={'60%'} />
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
          src='https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Logo.png' width={'80%'} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Image 
          className='secondary-image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png' width={'70%'} fit='cover' />
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
  // {
  //   identifier: 'ECOM',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         src='https://i.imgur.com/OrnQSTB.png' />
  //       </Box>
  //       <Box sx={{position: 'absolute', bottom: -30, left: 40}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/0FJ7RVa.png' width={'50%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
]

export const mlData = [
  {
    identifier: 'MLOPS',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image 
          className='main-image'
          width={'100%'}
          src='https://i.imgur.com/U0JwyFC.jpg' />
        </Box>
        {/* <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Image 
          className='secondary-image'
          src='https://i.imgur.com/3V1Vmb6.png' width={'80%'} fit='cover' />
        </Box> */}
      </Box>
    )
  },
  // {
  //   identifier: 'EMBD',
  //   image: (
  //     <Box sx={{position: 'relative'}}>
  //       <Box>
  //         <Image 
  //         className='main-image'
  //         width={'80%'}
  //         src='https://i.imgur.com/lc9R4Uo.png' />
  //       </Box>
  //       <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
  //         <Image 
  //         className='secondary-image'
  //         src='https://i.imgur.com/dDdwKOE.png' width={'80%'} fit='cover' />
  //       </Box>
  //     </Box>
  //   )
  // },
  {
    identifier: 'EMBD',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/gtS6nL0.png' width={'60%'} />
        </Box>
        <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/jYo2dlv.png' width={'60%'} />
        </Box>
      </Box>
    )
  },
  {
    identifier: 'RCAML',
    image: (
      <Box sx={{position: 'relative'}}>
        <Box>
          <Image className='main-image' src='https://i.imgur.com/B8EPRiQ.jpg' width={'100%'} />
        </Box>
        {/* <Box>
          <Image sx={{position: 'absolute', top: 40, left: '30%'}} className='secondary-image' src='https://i.imgur.com/jYo2dlv.png' width={'60%'} />
        </Box> */}
      </Box>
    )
  },
]