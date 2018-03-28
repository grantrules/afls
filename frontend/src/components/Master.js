import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles'

import { withRouter } from 'react-router'


import { CssBaseline, Button, AppBar } from 'material-ui'
//import Home from 'material-ui-icons/Assignment';
import NavDrawer from './fragments/NavDrawer'
import LoginFrag from './fragments/LoginFrag'

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
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import Authorized from '../auth/Authorized'


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

// these correspond to route paths, not the actual urls
const noNavDrawer = ['/', '/login', '/contact-us']

const navDrawer = path => typeof noNavDrawer.find(e => path === e) === "undefined"

class Master extends Component {

    

    constructor(props) {
        super(props);
        this.state = { navDrawerOpen: false };
    }


    openNavDrawer = () => {
        this.setState({navDrawerOpen: true })
    }

    closeNavDrawer = () => this.state.navDrawerOpen && this.setState({navDrawerOpen: false })

    componentWillReceiveProps(nextProps) {
        if (isWidthUp("sm", nextProps.width) && this.state.navDrawerOpen) {
            this.closeNavDrawer()
        }
    }

    render() {
        const { classes, location } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>

                <CssBaseline />

                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                    {navDrawer(location.pathname) &&

                        <Hidden smUp>
                        <IconButton onClick={this.openNavDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        </Hidden>
                    }
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            AFLS-OMG
                        </Typography>
                        
                        <LoginFrag/>

                    </Toolbar>
                </AppBar>

                <Authorized>
                {navDrawer(location.pathname) &&
                    <NavDrawer open={this.state.navDrawerOpen} close={this.closeNavDrawer}/>
                }
                </Authorized>

                <main className={classes.content} >
                    <div className={classes.toolbar} />

                    {this.props.children}

                </main>
                </div>

            </MuiThemeProvider>
        )
    }
}

export default withRouter(withWidth()(withStyles(styles)(Master)))