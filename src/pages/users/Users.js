import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@material-ui/core'

export default function Users() {
  return (
    <Box
      sx={ {
        display: "flex",
        justifyContent: "center",
        padding: "10% 10%"
      } }>
      <Typography>Main Content Users</Typography>
    </Box>
  )
}
