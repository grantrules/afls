import React from 'react';
import { Button, TextField } from 'material-ui'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import withAuth from '../../auth/withAuth'



function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = {
  dialog: {
    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
  }
}

/**
 * Login dialog
 */
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginCallback = this.loginCallback.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.close = this.close.bind(this)

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

  handleSubmit(event) {
    event.preventDefault();
    this.setState({recentFail: false})
    const credentials = { email: this.state.email, password: this.state.password }
    this.props.provider.login(credentials, this.loginCallback )
  }

  loginCallback(user) {
    if (!user) {
      // failure
      this.setState({recentFail: true})
    } else {
      // success
      this.close()
    }
  }

  close() {
    this.setState({recentFail: false})
    this.props.close()
  }


  render() {

    let { open } = this.props;

    const dialogAnim = (this.state.recentFail && styles.dialog) || {};

    return (

      
    <Dialog
        onClose={this.close}
        open={open}
        maxWidth="md"
        aria-labelledby="login-dialog-title"
        transition={Transition}
        PaperProps={{style:dialogAnim}}
      >
        <form onSubmit={this.handleSubmit}>
        <DialogTitle id="login-dialog-title">Log In</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                onChange={this.handleEmail}
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                required
                /><br />
            <TextField
                onChange={this.handlePassword}
                fullWidth
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                required
                />
        </DialogContent>
        <DialogActions>
          <Button variant="raised" color="secondary" type="submit">
            Log In
          </Button>
          <Button onClick={this.close} color="secondary">
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
        );
      }
}

export default withAuth(Login)