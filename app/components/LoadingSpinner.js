import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = ({ size = 40, color = 'primary' }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '93vh' }}>
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default CircularIndeterminate;
