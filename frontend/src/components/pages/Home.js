import React from 'react';
import { Paper } from 'material-ui'

const style = {
    paper: {
        width: 800,
        padding: 20,
        margin: "0 auto"
    }
}

const Home = () => (

    <div className="App">
        <Paper style={style.paper}>
            <img src="/afls.jpg" style={{ width: "50%", float: "left" }} />
            <div>Hello, This is objective mastery grading software for Assessment of Functional Living Skills</div>
        </Paper>

    </div>
)

export default Home