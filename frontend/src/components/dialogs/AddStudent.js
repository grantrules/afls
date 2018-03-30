import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/**
 * AddStudent dialog
 */
class AddStudent extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let close = this.props.close

        return (


    <Dialog
        onClose={close}
        open={this.props.open}        
        maxWidth="xs"
        aria-labelledby="add-student-dialog-title"
        transition={Transition}
      >
      <form onSubmit={this.handleSubmit}>
        <DialogTitle id="add-student-dialog-title">Add Student</DialogTitle>
        <DialogContent>
            <TextField
                    autoFocus
                    onChange={this.handleChange}
                    id="firstname"
                    label="First Name"
                    margin="normal"
                    required
                    />
                    
                    <TextField
                    onChange={this.handleChange}
                    id="lastname"
                    label="Last Name"
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


export default AddStudent