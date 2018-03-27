import React from 'react';
import { Button, Paper, TextField } from 'material-ui'

const style = {
    paper: {
        width: 400,
        padding: 20,
        margin: "0 auto"
    }
}


const Login = () => (
    <div className="App">
        <Paper style={style.paper} zDepth={3}>
        <TextField
          id="email"
          label="Email Address"
          margin="normal"
        /><br />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        /><br />

            <Button variant="raised" color="primary">Log In</Button>
        </Paper>

    </div>
)

export default Login