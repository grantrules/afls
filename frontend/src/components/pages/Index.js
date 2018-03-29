import React from 'react';
import { Paper, Button, Typography, Grid } from 'material-ui'
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'


const styles = {
    paper: {
        margin: 20,
        padding: 20,
    },
    button: {
        background: 'linear-gradient(45deg, #f23269 30%,#7d02db 90%);',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(0,0,0,0.1)',
      },
}

const Index = (props) => {

    const { classes } = props;
    
    return (

        <div className="App">
            <Paper className={classes.paper}>
                <Grid container>
                <Grid item xs={6}>
                <img src="/afls.jpg" alt="afls books" style={{width: "100%"}} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1">
                        Hello, This is objective mastery grading software for Assessment of Functional Living Skills
                    </Typography>

                    <Typography variant="body1">
                        Do your school use these books and need a digital solution to grading?
                    </Typography>
                    <Button component={Link} align="center" variant="raised" className={classes.button} to="/contact-us" color="secondary">Contact Us</Button>

                </Grid>
                </Grid>
            </Paper>

        </div>
    )
}

export default withStyles(styles)(Index)