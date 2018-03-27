import React from 'react';
import { Button, Paper, TextField, Typography } from 'material-ui'
import { FormControl } from 'material-ui/Form';


const style = {
    paper: {
        margin: 20,
        padding: 20,
    }
}


const ContactUs = () => (
    <div className="App">
        <Paper style={style.paper} zDepth={3}>

            <Typography variant="headline">Send us a message!</Typography>

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

            <Button variant="raised" color="primary">Send</Button>
        </Paper>

    </div>
)

export default ContactUs