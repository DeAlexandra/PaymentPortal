import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'

export default function ErrorPage() {
  return (
    <Box
      sx={ {
        display: "flex",
        justifyContent: "center",
        padding: "10% 10%"
      } }>
      <Typography>Page not found</Typography>
    </Box>
  )
}
