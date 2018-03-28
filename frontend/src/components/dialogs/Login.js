import React from 'react';
import { Button, TextField } from 'material-ui'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const Login = (props) => {

    let { close, open } = props;

        return (


    <Dialog
        onClose={close}
        open={open}
        maxWidth="md"
        aria-labelledby="login-dialog-title"
        transition={Transition}
      >
        <DialogTitle id="login-dialog-title">Log In</DialogTitle>
        <DialogContent>
            <TextField
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                /><br />
            <TextField
                fullWidth
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} variant="raised" color="secondary">
            Log In
          </Button>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        );

}

export default Login