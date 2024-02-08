
import {  Box, Typography, Grid, TextField, Button, Link, Card, CardContent, Divider, Step, StepLabel, Stepper, AppBar, Container, CssBaseline, Paper, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FullNameAndAge from './FullNameAndAge';
import EmailAndPassword from './EmailAndPassword';
import { Copyright } from '@material-ui/icons';
import background from '../assert/background.png';
const styles = {
  paperContainer: {
      color:"#FFFFFF",
      font:'Roboto'
  }
};
const steps = ['Step 1', 'Step2'];

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <FullNameAndAge />;
    case 1:
      return <EmailAndPassword/>;
    default:
      throw new Error('Unknown step');
  }
}
const SignUp = () =>{

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Stepper activeStep={activeStep} style={{background:`url(${background})`,
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
                <Button
                  variant="contained"
                  onClick={handleNext}
                  color='success'
                  style={{ position:"initial",width: "345px",
                  height: "40px",
                  top: "-506px",
                  left:" 1454px"
                  }}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'REGISTER NOW' : 'CONTINUE'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
)
}
export default SignUp