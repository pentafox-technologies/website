import { MantineProvider, Text } from '@mantine/core'
import React from 'react'

const OutfitWrapper = ({children, style, ...props}) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit !important'
      }}
      {...props}
    >
      <Text style={style}>{children}</Text>
    </MantineProvider>
  )
}

export default OutfitWrapper