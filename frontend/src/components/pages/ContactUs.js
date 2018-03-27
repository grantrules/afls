import React from 'react';
import { Button, Paper, TextField } from 'material-ui'

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
                hintText="Name"
            /><br />
            <TextField
                id="email"
                hintText="Email Address"
            /><br />
            <TextField
            hintText="Message"
            floatingLabelText="Questions or comments? Let us know!"
            multiLine={true}
            style={{width:"100%"}}
            rows={2}
          /><br />

            <Button variant="raised" label="Send" />
        </Paper>

    </div>
)

export default ContactUs