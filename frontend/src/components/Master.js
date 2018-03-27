import React, { Component } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import { colors } from 'material-ui/styles'

import { CssBaseline, Button, AppBar } from 'material-ui'
import Home from 'material-ui-icons/Assignment';
import NavDrawer from './fragments/NavDrawer'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Master extends Component {
    /*
        constructor(props, context) {
            super(props, context)
    
            this.muiTheme = getMuiTheme({
                palette: {
                    
                    //primary1Color: colors.indigo[300],
                    //primary2Color: colors.indigo[300],
                    //primary3Color: colors.grey.A600,
                    //accent1Color: colors.cyan.A700,
                    //accent2Color: colors.cyan.A200,
                    //accent3Color: colors.cyan.A100,
                    //accent1Color: colors.pinkA200,
                    //accent2Color: colors.pinkA400,
                    //accent3Color: colors.pinkA100,
                    userAgent: props.userAgent
                }
            })
    
        }
    
    
                    //<MuiThemeProvider muiTheme={this.muiTheme}>
    
    */
    render() {
        const { classes } = this.props;

        return (

            <MuiThemeProvider>
                <CssBaseline />

                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit" href="/login">Login</Button>
                    </Toolbar>
                </AppBar>

                <NavDrawer />

                <div style={{ marginLeft: 260 }}>

                    {this.props.children}

                </div>

            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Master)