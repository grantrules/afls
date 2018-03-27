import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import indigo from 'material-ui/colors/indigo';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui-icons/Add';
const indigo200 = indigo['200'];


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
            <Subheader>Classes</Subheader>
            <ListItem
                primaryText="Class 1"
                secondaryText={
                    <p>
                        Weds @ 2pm
                    </p>
                }
                secondaryTextLines={1}
            />
            <Divider inset={true} />

            <ListItem
                style={{background: indigo200}}
                primaryText="Class 2: Fun Activities"
                secondaryText={
                    <p>
                        Weds @ 2pm
                    </p>
                }
                secondaryTextLines={1}
            />
            <Divider inset={true} />

        </List>

        <FloatingActionButton style={style.button} secondary={true}>
            <ContentAdd />
        </FloatingActionButton>



    </div>
)

export default Classes