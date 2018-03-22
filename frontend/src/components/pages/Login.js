import React from 'react';
import { RaisedButton, Paper, TextField } from 'material-ui'

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
                hintText="Email Address"
            /><br />
            <TextField
                id="password"
                hintText="Password"
                type="password"
            /><br />

            <RaisedButton label="Log in" />
        </Paper>

    </div>
)

export default Login