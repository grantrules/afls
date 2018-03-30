import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ActionGrade from 'material-ui-icons/Grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';


import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

import AddStudent from '../dialogs/AddStudent'


const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}

class Students extends React.Component {

    constructor(props) {
        super(props);
        this.state = { addStudent: false }
        this.toggleAddStudent = this.toggleAddStudent.bind(this);
    }

    toggleAddStudent() {
        this.setState({addStudent: !this.state.addStudent})
    }

    render() {
        return (
        <div className="app">
        <List>
            <ListItem>
                <Avatar>
                    <ActionGrade color="secondary"/>
                </Avatar>
                <ListItemText inset primary="Chelsea Otakan"/>
            </ListItem>
            <ListItem>
                <ListItemText inset primary="Eric Hoffman"/>
            </ListItem>
            <ListItem>
                <ListItemText inset primary="James Anderson"/>
            </ListItem>
            <ListItem>
                <ListItemText inset primary="Kerem Suer"/>
            </ListItem>
        </List>
        <Divider inset={true} />
        <List>
            <ListItem>
            <Avatar
                        style={{ left: 8 }}
                    >
                        <Typography variant="headline" color="secondary">A</Typography>
            </Avatar>
                <ListItemText inset primary="Chelsea Otakan"/>
            </ListItem>

            <ListItem>
                <ListItemText inset primary="Adam Adannaway"/>
            </ListItem>
            <ListItem>
                <ListItemText inset primary="Allie Grace"/>
            </ListItem>
            <ListItem>
                <ListItemText inset primary="Angel Cuervas"/>
            </ListItem>
        </List>


        <Button variant="fab" style={style.button} color="secondary" onClick={this.toggleAddStudent}>
            <ContentAdd />
        </Button>

        <AddStudent open={this.state.addStudent} close={this.toggleAddStudent}/>


        </div>

        )
    }
}

export default Students