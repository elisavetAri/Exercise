import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import PasswordChecklist from "react-password-checklist"

const EmailAndPassword =()=> {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("")  
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
                            pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i",
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
                          autoComplete="new-password"
                          value={password}
                          onChange={e => setPassword(e?.target?.value)}
                        />
                      <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5}
				value={password}/>
                </Grid>
        </Grid>
        </Grid>
    )
}

export default EmailAndPassword