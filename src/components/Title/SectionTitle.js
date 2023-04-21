import { Box } from '@mantine/core'
import React from 'react'
import { sectionTitleStyles } from './SectionTitle.css'

const SectionTitle = ({title, index, reverse, subText}) => {
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
    </Box>
  )
}

export default SectionTitle