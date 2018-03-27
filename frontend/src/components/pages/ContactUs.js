import React from 'react';
import { Button, Paper, TextField } from 'material-ui'
import { FormControl, FormHelperText } from 'material-ui/Form';


const style = {
    paper: {
        width: 600,
        padding: 20,
        margin: "0 auto"
    }
}


const ContactUs = () => (
    <div className="App">
        <Paper style={style.paper} zDepth={3}>
        <h2>Send us a message!</h2>
        <TextField
          id="name"
          label="Name"
          margin="normal"
        /><br />
        <TextField
          id="email"
          label="Email Address"
          margin="normal"
        /><br />
<FormControl fullWidth>
        <TextField
          id="textarea"
          label="Questions or comments? Let us know!"
          placeholder="Message"
          multiline
          margin="normal"
        /><br />
        </FormControl>

            <Button variant="raised">Send</Button>
        </Paper>

    </div>
)

export default ContactUs