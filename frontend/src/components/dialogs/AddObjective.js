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
 * AddObjective dialog
 */
class AddObjective extends AddDialog {

    render() {
        let close = this.props.close

        return (


    <Dialog
        onClose={close}
        open={this.props.open}        
        maxWidth="xs"
        aria-labelledby="add-objective-dialog-title"
        transition={Transition}
      >
      <form onSubmit={this.handleSubmit}>
        <DialogTitle id="add-objective-dialog-title">Add Objective</DialogTitle>
        <DialogContent>

            <TextField
                onChange={this.handleChange}
                id="name"
                label="Task Name"
                margin="dense"
                required
                />

            <TextField
                autoFocus
                onChange={this.handleChange}
                id="task"
                label="Task"
                margin="dense"
                />

            <TextField
                onChange={this.handleChange}
                id="score"
                label="Score"
                margin="dense"
                required
                />
            

            <TextField
                onChange={this.handleChange}
                id="objective"
                label="Task Objective"
                margin="dense"
                required
                />

            <TextField
                onChange={this.handleChange}
                id="question"
                label="Question"
                margin="dense"
                />

            <TextField
                onChange={this.handleChange}
                id="example"
                label="Example"
                margin="dense"
                />

            <TextField
                onChange={this.handleChange}
                id="comment"
                label="Comment"
                margin="dense"
                />
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


export default AddObjective