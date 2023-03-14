import { MantineProvider, Text } from '@mantine/core'
import React from 'react'

const OutfitWrapper = ({children, style}) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit !important'
      }}
    >
      <Text style={style}>{children}</Text>
    </MantineProvider>
  )
}

export default OutfitWrapper