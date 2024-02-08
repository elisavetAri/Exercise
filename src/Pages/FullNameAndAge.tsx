import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import EmailAndPassword from './EmailAndPassword';

const FullNameAndAge = ()=>{
    const [fullName, setFullName] = useState("")
const [nameError, setNameError] = useState(true);
const [birthday, setBirthday] = useState(dayjs())
    const today = dayjs();
    const isStepOptional = (step:any) => {
      return step === 1;
    };
    const min18 = dayjs().subtract(60, 'year');
    console.log(min18)
const max60 =dayjs().subtract(18, 'year');
const styles = {
    paperContainer: {
        // backgroundImage:`url(${background})`,
        color:"#FFFFFF",
        font:'Roboto'
    }
  };
  const validateNameAndAge = ()  => {
    return (fullName ===fullName && birthday === birthday)
  }
return (
    <Grid>
    <Grid  container spacing={2} columns={16} color='#FFFFFF'>
        <Grid item xs={8}>
    <TextField
    InputProps={{
      style: styles.paperContainer
    }}
      autoComplete="full-name"
      name="full_name"
      required
      fullWidth
      value={fullName}
      onChange={e => setFullName(e?.target?.value)}
      onBlur={e =>
        e.target.validity.valid ?
          setNameError(false): setNameError(true)}
      id="full_name"
      label="full Name"
      autoFocus
      helperText={
        nameError ? "Please enter your full name (letters only)" : ""
      }
      inputProps={{
        pattern: "[A-Za-z ]+",
      }}
      // onBlur={(e) => {
      //   setDisabled(true);
      //   e.target.value = parseFloat(e.target.value).toFixed(4);
      // }}
      // onClick={handleOnBlur}
    />  
</Grid>
<Grid item xs={8}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
   <DatePicker 
    defaultValue={today}
    value={birthday ?? today}
    minDate={min18}
    maxDate={max60}
   />
 </LocalizationProvider>
  </Grid>
  </Grid>
<Grid>
</Grid>
  </Grid>
)





}

export default FullNameAndAge