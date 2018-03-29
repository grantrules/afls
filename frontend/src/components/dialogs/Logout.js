import React from 'react';
import PropTypes from 'prop-types'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class Logout extends React.Component {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

    handleLogout() {
      this.context.provider.logout()
      this.props.close()
    }

    render() {
        let close = this.props.close

        return (


    <Dialog
        onClose={close}
        open={this.props.open}        
        maxWidth="xs"
        aria-labelledby="logout-dialog-title"
        transition={Transition}
      >
        <DialogTitle id="logout-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleLogout} color="secondary">
            Yes
          </Button>
          <Button onClick={close} variant="raised" color="secondary">
            No
          </Button>
        </DialogActions>
      </Dialog>
        );
    }
}

Logout.contextTypes = {
  /**
   * Login provider
   */
  provider: PropTypes.object,
}

export default Logout