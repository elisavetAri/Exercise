
import {  Box, Grid, TextField, Button, Step, StepLabel, Stepper, AppBar, Container, CssBaseline, Paper, Alert, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EmailAndPassword from './EmailAndPassword';
import background from '../assert/background.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import PasswordChecklist from "react-password-checklist"

const steps = ['Step 1', 'Step2'];


const Registered = () =>{
  const styles = {
    paperContainer: {
        color:"#FFFFFF",
        font:'Roboto'
    }
  };
const [fullName, setFullName] = useState("")
const [nameError, setNameError] = useState(true);
const [birthday, setBirthday] = React.useState<Dayjs | null>(dayjs());;
const [email, setEmail] = useState("")
const [emailError, setEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false)
const [birthdayError, setBirthdayError] =useState(false)
const [password, setPassword] = useState("")  
const [value, setValue] = React.useState();
const today = dayjs();

    const min18 = dayjs().subtract(60, 'year');
const max60 =dayjs().subtract(18, 'year');

const [showAlert, setShowAlert] = useState(false);

React.useEffect(() => {
  setValue(value);
}, [fullName, birthday])


const handleButtonClick = () => {
  setShowAlert(true);
};

  function getStepContent(step: any) {
  
    switch (step) {
      case 0:
        return (
          <Grid>
          <Grid  container spacing={2} columns={16} >
              <Grid item xs={8}>
          <TextField
          InputProps={{
            style: styles.paperContainer
          }}
            autoComplete="full-name"
            name="Full_name"
            required
            fullWidth
            value={fullName}
            onChange={e => setFullName(e?.target?.value)}
            onBlur={e =>
              e.target.validity.valid ?
                setNameError(false): setNameError(true)}
            id="full_name"
            label="Full Name"
            autoFocus
            helperText={
              nameError ? "Please enter your full name (letters only)" : ""
            }
            inputProps={{
              pattern: "[A-Za-z ]+",
            }}
          />  
      </Grid>
      <Grid item xs={8}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker 
          defaultValue={today}
          slotProps={{
            textField: {
              helperText: 'dd/mm/yy',
            },
          }}
          value={birthday}
          minDate={min18}
          maxDate={max60}
         />
       </LocalizationProvider>
        </Grid>
        </Grid>
      <Grid>
        <Button  variant="contained"
                  onClick={handleNext}
                  color="success"
                  style={{ position:"initial",width: "345px",
                  height: "40px",
                  top: "-506px",
                  left:" 1454px"
                  }}
                  sx={{ mt: 3, ml: 1 }}
                   disabled={!fullName }>
          Continue
        </Button>
      </Grid>
        </Grid>);
      case 1:
        return (
          <Grid>
          <Grid  container spacing={2} columns={16} color='#FFFFFF'>
              <Grid item xs={8}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                helperText={
                                  emailError ? "Please enter correct email (example@email.com)" : ""
                                }
                                onBlur={e =>
                                  e.target.validity.valid ?
                                    setEmailError(false): setEmailError(true)}
                                inputProps={{
                                  pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;",
                                }}
                                onChange={e => setEmail(e?.target?.value)}
                              />
                            </Grid>
                            <Grid item xs={8}>
                              <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                inputProps={{
                                  pattern: "^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)",
                                }}
                                autoComplete="new-password"
                                value={password}
                                onChange={e => setPassword(e?.target?.value)}
                                onBlur={e =>
                                  e.target.validity.valid ?
                                  setPasswordError(false): setPasswordError(true)}
                              />
                            <PasswordChecklist
              rules={["minLength","specialChar","number","capital"]}
              minLength={5}
              value={password}
              />
                      </Grid>
                      <Grid>
        <Button  variant="contained"
                  onClick={handleButtonClick}
                  color="success"
                  style={{ position:"initial",width: "345px",
                  height: "40px",
                  top: "-506px",
                  left:" 1454px"
                  }}
                  sx={{ mt: 3, ml: 1 }}
                   disabled={ !password}>
         <Typography>REGISTER NOW</Typography>
        </Button> 
      </Grid> {showAlert && (
    <Alert severity="success">
    Registration Successful! <br></br>
  Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.
</Alert>
    )}
              </Grid>
              </Grid>
        );

    }
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

    return(
  
      <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper  style={{background:"#202E47"}} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Stepper activeStep={activeStep} style={{
height: "342px",
top: "2166px",
left: "187px"}
}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            ""
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{  justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  ''
                )}
              </Box>
            </React.Fragment>
          )}
          <Grid>
          </Grid>
          <Typography color="#FFFFFF" variant="body2" padding={2} >
         Don’t have an account? Create one here and register for the event
        </Typography>
        <Typography color="#FFFFFF"  variant="caption" >
        Terms and Conditions apply*. To read the full T&Cs, click here
        </Typography>
        </Paper>
      </Container>
    </React.Fragment>
)
}
export default Registered