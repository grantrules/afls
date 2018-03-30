import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

import AddClass from '../dialogs/AddClass'


const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}

class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addClass: false }
        this.toggleAddClass = this.toggleAddClass.bind(this);
    }

    toggleAddClass() {
        this.setState({addClass: !this.state.addClass})
    }
    
    render() {
        return (
    <div className="App">
        <List>
            <ListItem>
                <ListItemText primary="Class 1" secondary="Weds @ 2pm"/>
            </ListItem>
            <Divider inset={true} />

            <ListItem>
                <ListItemText primary="Class 2: Fun Activities" secondary="Weds @ 2pm"/>
            </ListItem>
            <Divider inset={true} />

        </List>

        <Button variant="fab" style={style.button} color="secondary" onClick={this.toggleAddClass}>
            <ContentAdd />
        </Button>

        <AddClass open={this.state.addClass} close={this.toggleAddClass}/>



    </div>
)
    }
}

export default Classes