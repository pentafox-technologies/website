import { MantineProvider, Text } from '@mantine/core'
import React from 'react'

const VarelaWrapper = ({children, style}) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Varela Round !important'
      }}
    >
      <Text style={style}>{children}</Text>
    </MantineProvider>
  )
}

export default VarelaWrapper