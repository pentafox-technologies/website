import { Box, Button, Text, UnstyledButton } from '@mantine/core'
import React from 'react'
import { sectionTitleStyles } from './SectionTitle.css'
import VarelaWrapper from '../FontWrapperComp/VarelaWrapper'

const SectionTitle = ({title, index, reverse, subText, sectionDescription, showDescription = false}) => {
  const { classes } = sectionTitleStyles() 
  const titleText = title.split(' ')
  return (
    <Box p={15}>
      <div style={{textAlign: reverse ? 'right' : 'left'}}>
        <h1 className={classes.subText}>{subText}</h1>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: reverse ? 'row-reverse' : 'row'}}>
        <div style={{display: 'flex', alignItems: 'center', flex: 1, gap: 40, flexDirection: reverse ? 'row-reverse' : 'row'}}>
          <h1 className={classes.titleText}>{titleText?.[0]} <span style={{color: 'rgba(220, 41, 8, 1)'}}>{titleText?.[1]}</span></h1>
          <div style={{width: '35%', border: '1px solid rgba(220, 41, 8, 0.1)'}} />
        </div>
        <div>
          <h1 className={classes.indexText}>{index}</h1>
        </div>
      </div>
      {
        showDescription && (
          <>
            <div style={{marginTop: 25, display: 'flex', alignItems: 'center', justifyContent: reverse ? 'flex-end' : 'flex-start'}}>
              <VarelaWrapper style={{fontSize: 18, textAlign: reverse ? 'right' : 'left', width: '60%', lineHeight: 1.45}}>
                {sectionDescription}
              </VarelaWrapper>
            </div>
            <div style={{ display: 'flex', justifyContent: reverse ? 'flex-end' : 'flex-start', marginTop: 25 }}>
              <Button size='lg' color='red' style={{backgroundColor: '#CD0E11'}}>Explore</Button>
            </div>
          </>
        )
      }
    </Box>
  )
}

export default SectionTitle