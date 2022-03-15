import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@mui/system'


export default function Home() {
  return (
    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        padding:"10% 10%"

    }}>
          
     <Typography>Main Content Home</Typography> 
    </Box>
  )
}
