import { Container, CssBaseline, Box, Typography, Grid, TextField, Button, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SignUp = () =>{
    const [fullName, setFullName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    

    const validateForm = () =>{
        if (fullName.length == 0 ) {
            alert('Invalid Form, Full Name can not be empty')
            return
          }
    }
    return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  >
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="full-name"
                          name="full_name"
                          required
                          fullWidth
                          error
                          value={fullName}
                          onChange={e => setFullName(e?.target?.value)}
                          id="full_name"
                          label="full Name"
                          autoFocus
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
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider> */}
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
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
                      onClick={() => {
                        validateForm()
                      }}
                    >       
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    </Grid>
                  </Box>
                </Box>
              </Container>
          
)
}
export default SignUp