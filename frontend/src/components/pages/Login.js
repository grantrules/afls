import React from 'react';
import { Button, Paper, TextField, Typography } from 'material-ui'

const style = {
    paper: {
        width: 400,
        padding: 20,
        margin: "0 auto"
    }
}


const Login = () => (
    <Paper style={style.paper} zDepth={3}>

        <Typography variant="headline">Log in</Typography>

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

        <Button variant="raised" color="secondary">Log In</Button>
    </Paper>
)

export default Login