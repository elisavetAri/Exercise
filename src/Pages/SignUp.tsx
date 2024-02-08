
import {  Box, Typography, Grid, TextField, Button, Link, Card, CardContent, Divider, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';


const steps = ['Step 1', 'Step2'];

const SignUp = () =>{
    const [fullName, setFullName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [disabled, setDisabled] = useState(true);
    const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    const [activeStep, setActiveStep] = React.useState(0);
    const [error, setError] = useState("")
    const [nameError, setNameError] = useState(true);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step:any) => {
      return step === 1;
    };
  
 const stepCase = (step:any) => {
  // const handleNameChange =( e: Event) => {
  //   setName(e.target.value);
  //   if (e.target.validity.valid) {
  //     setNameError(false);
  //   } else {
  //     setNameError(true);
  //   }
  // };
  switch (step) {
    case 0:
      return   (<><TextField
        key="name"
        id="outlined-name"
        label="Full Name"
        error
        helperText={
          nameError ? "Please enter your name (letters and spaces only)" : ""
        }
        inputProps={{
          pattern: "[A-Za-z ]+",
        }}
        margin="normal"
        variant="outlined" />

        <TextField
          key="birthday"
          id="outlined-name"
          label="Birthday"
          margin="normal"
          variant="outlined" /></>
        )
    case 1:
     return   (<><TextField
       key="email"
       id="outlined-name"
       label="Email ID"
       margin="normal"
       variant="outlined" /><TextField
         key="password"
         id="outlined-name"
         label="Password"
         margin="normal"
         variant="outlined" /></>)
   
    default:
      return 'Unknown step';
  }
}

    
    const isStepSkipped = (step:any) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };


    const validateForm = () =>{
        if (fullName.length == 0 ) {
            alert('Invalid Form, Full Name can not be empty')
            return
          }
          if (pattern){
            alert('Full name not match')
          }
    }

    const handleOnBlur = () => {
      if (disabled === true) {
        setDisabled(false);
      }
    }
    
    return(
  
            <Grid component="main" maxWidth="xs">
               
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color:"#FFFFFF"
                  }}
                  >
               <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
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
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={e => setEmail(e?.target?.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>

                        {/* <TextField
                          required
                          fullWidth
                          name="birthday"
                          label="birthday"
                          type="birthday"
                          id="birthday"
                          autoComplete="birthday"
                          value={birthday}
                          onChange={e => setBirthday(e?.target?.value)}
                        /> */}
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value={password}
                          onChange={e => setPassword(e?.target?.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      // onClick={() => {
                      //   validateForm()
                      // }}
                    >       
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    </Grid>
                  </Box>
                  <Test></Test>
                </Box>
              </Grid>
          
)
}
export default SignUp