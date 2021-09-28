import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({onClick,title}) {
  return (
    
     
      <Button onClick={onClick} variant="contained">{title}</Button>
      
  
  );
}

