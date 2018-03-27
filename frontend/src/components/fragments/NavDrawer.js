import React from 'react';
import { Drawer, MenuItem, Divider } from 'material-ui'
import School from 'material-ui-icons/School';
import Group from 'material-ui-icons/Group'
import Chart from 'material-ui-icons/InsertChart'
import AssignmentTurnedIn from 'material-ui-icons/AssignmentTurnedIn'
import Exit from 'material-ui-icons/ExitToApp'
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';


import Logout from '../dialogs/Logout'

const styles = theme => ({
    drawerPaper: {
      position: 'relative',
      width: 240,
    },
    toolbar: theme.mixins.toolbar,
  });


class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false, logout: false };
    }

    state = {
        open: false,
        logout: false,
    };



    openLogout = () => this.setState({ logout: true })

    closeLogout = () => this.setState({ logout: false })

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        const { classes } = this.props;
        return (
            <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />

                <MenuItem component="a" href="/classes">
                    <ListItemIcon><School/></ListItemIcon>
                    <ListItemText primary="Classes"/>
                </MenuItem>

                <MenuItem component="a" href="/objectives">
                    <ListItemIcon><AssignmentTurnedIn/></ListItemIcon>
                    <ListItemText primary="Objectives"/>
                </MenuItem>
                

                <MenuItem component="a" href="/students">
                    <ListItemIcon><Group/></ListItemIcon>
                    <ListItemText primary="Students"/>
                </MenuItem>

                <Divider inset={true} />

                <MenuItem component="a" href="#">
                    <ListItemIcon><Chart/></ListItemIcon>
                    <ListItemText primary="Reports"/>
                </MenuItem>


                <MenuItem 
                    onClick={this.openLogout}
                    style={{ position: "fixed", bottom: 0, width: '100%' }}>
                    <ListItemIcon><Exit /></ListItemIcon>
                    <ListItemText primary="Logout"/>
                </MenuItem>

                <Logout open={this.state.logout} close={this.closeLogout} />

            </Drawer>
        );
    }
}

export default withStyles(styles)(NavDrawer)