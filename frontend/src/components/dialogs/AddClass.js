import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Slide from 'material-ui/transitions/Slide';

import AddDialog from './AddDialog'


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/**
 * AddClass dialog
 */
class AddClass extends AddDialog {


    render() {
        let close = this.props.close

        return (


    <Dialog
        onClose={close}
        open={this.props.open}        
        maxWidth="xs"
        aria-labelledby="add-class-dialog-title"
        transition={Transition}
      >
      <form onSubmit={this.handleSubmit}>
        <DialogTitle id="add-class-dialog-title">Add Class</DialogTitle>
        <DialogContent>
            <TextField
                    autoFocus
                    onChange={this.handleChange}
                    id="name"
                    label="Class Name"
                    margin="normal"
                    required
                    />
                    <br />
        </DialogContent>
        <DialogActions>
        <Button onClick={close} variant="raised" color="secondary" type="submit">
            Save
          </Button>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
        );
    }
}


export default AddClass