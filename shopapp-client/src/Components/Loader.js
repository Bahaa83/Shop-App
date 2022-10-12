import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex',justifyContent:"center",height:"100vh",alignItems:"center" }}>
      <CircularProgress size={100} />
    </Box>
  )
}
export default Loader;
