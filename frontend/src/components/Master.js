import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles'

import { CssBaseline, Button, AppBar } from 'material-ui'
//import Home from 'material-ui-icons/Assignment';
import NavDrawer from './fragments/NavDrawer'

import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { createMuiTheme } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';


import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import { darken } from 'material-ui/styles/colorManipulator';


//const drawerWidth = 240;

const theme = createMuiTheme({
      palette: {
        primary: indigo,
        secondary: {
          // Darken so we reach the AA contrast ratio level.
          main: darken(pink.A400, 0.08),
        },
      },
    });

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
      },
      toolbar: theme.mixins.toolbar,

  });

class Master extends Component {
    /*
       
                    
                    //primary1Color: colors.indigo[300],
                    //primary2Color: colors.indigo[300],
                    //primary3Color: colors.grey.A600,
                    //accent1Color: colors.cyan.A700,
                    //accent2Color: colors.cyan.A200,
                    //accent3Color: colors.cyan.A100,
                    //accent1Color: colors.pinkA200,
                    //accent2Color: colors.pinkA400,
                    //accent3Color: colors.pinkA100,
    */
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>

                <CssBaseline />

                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Hidden smUp>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        </Hidden>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            AFLS-OMG
                        </Typography>
                        <Button color="inherit" href="/login">Login</Button>
                    </Toolbar>
                </AppBar>

                    <NavDrawer />
                <main className={classes.content} >
                    <div className={classes.toolbar} />

                    {this.props.children}

                </main>
                </div>

            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Master)