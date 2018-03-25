import React from 'react';
import { Drawer, MenuItem, Divider, AppBar } from 'material-ui'
import School from 'material-ui/svg-icons/social/school';
import Group from 'material-ui/svg-icons/social/group'
import Chart from 'material-ui/svg-icons/editor/insert-chart'
import AssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in'
import Exit from 'material-ui/svg-icons/action/exit-to-app'

import Logout from '../dialogs/Logout'


class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: true, logout: false };
    }

    state = {
        open: false,
        logout: false,
    };



    openLogout = () => this.setState({ logout: true })

    closeLogout = () => this.setState({ logout: false })

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <Drawer open={this.state.open}>

                <AppBar title="AFLS OMG" />

                <MenuItem leftIcon={<School />} href="/classes">Classes</MenuItem>
                <MenuItem leftIcon={<AssignmentTurnedIn />} href="/objectives">Objectives</MenuItem>
                <MenuItem leftIcon={<Group />} href="/students">Students</MenuItem>
                <Divider inset={true} />
                <MenuItem leftIcon={<Chart />}>Reports</MenuItem>
                <MenuItem onClick={this.openLogout} leftIcon={<Exit />} style={{ position: "fixed", bottom: 0, width: '100%' }}>Logout</MenuItem>

                <Logout open={this.state.logout} close={this.closeLogout} />

            </Drawer>
        );
    }
}

export default NavDrawer