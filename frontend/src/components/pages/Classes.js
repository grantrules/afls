import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

const style = {
    button: {
        position: "fixed",
        bottom: 25,
        right: 25,
    }
}


const Classes = () => (
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

        <Button variant="fag" style={style.button}>
            <ContentAdd />
        </Button>



    </div>
)

export default Classes