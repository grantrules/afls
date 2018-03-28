import React from 'react';
import { Button, TextField } from 'material-ui'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';

import PropTypes from 'prop-types'


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = {
  dialog: {
    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
  }
}

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginCallback = this.loginCallback.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)

    this.state = {recentFail: false}
  }

  handleEmail(event) {
    this.setState({
        recentFail: false,
        email: event.target.value
      });
    }

    handlePassword(event) {
      this.setState({
          recentFail: false,
          password: event.target.value
        });
      }

  handleSubmit() {
    this.setState({recentFail: false})
    const credentials = { email: this.state.email, password: this.state.password }
    this.context.provider.login(credentials, this.loginCallback )
  }

  loginCallback(user) {
    if (!user) {
      // failure
      this.setState({recentFail: true})
    } else {
      // success
    }
  }


  render() {

    let { close, open } = this.props;

    const dialogAnim = (this.state.recentFail && styles.dialog) || {};

    return (


    <Dialog
        onClose={close}
        open={open}
        maxWidth="md"
        aria-labelledby="login-dialog-title"
        transition={Transition}
        PaperProps={{style:dialogAnim}}
      >
        <DialogTitle id="login-dialog-title">Log In</DialogTitle>
        <DialogContent>
            <TextField
                onChange={this.handleEmail}
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                /><br />
            <TextField
                onChange={this.handlePassword}
                fullWidth
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} variant="raised" color="secondary">
            Log In
          </Button>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        );
      }
}

Login.contextTypes = {
  /**
   * Login provider
   */
  provider: PropTypes.object,
}

export default Login