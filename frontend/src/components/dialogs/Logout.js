import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class Logout extends React.Component {

    render() {
        let close = this.props.close;

        return (


    <Dialog
        onClose={close}
        open={this.props.open}        
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
      >
        <DialogTitle id="confirmation-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="secondary">
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

export default Logout