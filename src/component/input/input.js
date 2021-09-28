

import TextField from '@mui/material/TextField';

export default function BasicTextFields({title,type,value,onChange}) {
  return (
   <>
      <TextField id="outlined-basic" type={type} value={value} onChange={onChange} fullWidth={true} label={title} variant="outlined" />
 </>
    
  );
}
