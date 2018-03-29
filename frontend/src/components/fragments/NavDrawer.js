import React from 'react';
import { Link } from 'react-router-dom'

import { Typography, Drawer, MenuItem, Divider } from 'material-ui'
import { School, Group, AssignmentTurnedIn, ExitToApp, InsertChart as Chart } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';

import { ListItemText, ListItemIcon } from 'material-ui/List';


import Logout from '../dialogs/Logout'

const styles = theme => ({
    drawerPaper: {
      position: 'relative',
      width: 240,
    },
    drawerPaperSm: {
        width: 240,
    },
    title: {
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.primary.main,
        },
      },
    toolbar: {
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
  });

/**
 * NavDrawer fragment
 */
class NavDrawer extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = { logout: false };
    }

    openLogout = () => this.setState({ logout: true })

    closeLogout = () => this.setState({ logout: false })

    render() {
        const { width, classes, open, close } = this.props;
        const showDrawer = isWidthUp("sm", width);

        var logout = () => { this.openLogout(); close() }

        return (
            <nav>

            <Drawer
                variant={(showDrawer && "permanent") || "temporary"}
                open={showDrawer || open}
                classes={{paper: (showDrawer && classes.drawerPaper) || classes.drawerPaperSm}}
                onClose={close}>
       
                <div  className={classes.toolbar}>
                <Typography variant="title">
                <Link to="/home" className={classes.title} onClick={close}>AFLS-OMG</Link>
                </Typography>
                </div>

                <MenuItem component={Link} to="/classes" onClick={close}>
                    <ListItemIcon><School/></ListItemIcon>
                    <ListItemText primary="Classes"/>
                </MenuItem>

                <MenuItem component={Link} to="/objectives" onClick={close}>
                    <ListItemIcon><AssignmentTurnedIn/></ListItemIcon>
                    <ListItemText primary="Objectives"/>
                </MenuItem>
                
                <MenuItem component={Link} to="/students"  onClick={close}>
                    <ListItemIcon><Group/></ListItemIcon>
                    <ListItemText primary="Students"/>
                </MenuItem>

                <Divider inset={true} />

                <MenuItem component={Link} to="#"  onClick={close}>
                    <ListItemIcon><Chart/></ListItemIcon>
                    <ListItemText primary="Reports"/>
                </MenuItem>


                <MenuItem 
                    onClick={logout}
                    style={{ position: "fixed", bottom: 0, width: '100%' }}>
                    <ListItemIcon><ExitToApp /></ListItemIcon>
                    <ListItemText primary="Logout"/>
                </MenuItem>


            </Drawer>
            
            <Logout open={this.state.logout} close={this.closeLogout} />

            </nav>
        );
    }
}

export default withStyles(styles)(withWidth()(NavDrawer))