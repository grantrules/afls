import React from 'react';
import { Paper, Typography, Grid } from 'material-ui'
import { withStyles } from 'material-ui/styles';


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

const Home = (props) => {

    const { classes } = props;
    
    return (

        <Paper className={classes.paper}>
            <Grid container>
            <Grid item xs={6}>
            <img src="/afls.jpg" alt="afls books" style={{width: "100%"}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Welcome to AFLS-OMG
                </Typography>
            </Grid>
            </Grid>
        </Paper>

    )
}

export default withStyles(styles)(Home)