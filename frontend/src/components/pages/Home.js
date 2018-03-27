import React from 'react';
import { Paper, Button } from 'material-ui'

const style = {
    paper: {
        margin: 20,
        padding: 20,
    }
}

const Home = () => (

    <div className="App">
        <Paper style={style.paper}>
            <img src="/afls.jpg" alt="afls books" style={{ width: "50%", float: "left" }} />
            <div>
                
                <p>Hello, This is objective mastery grading software for Assessment of Functional Living Skills</p>
                <p>Do your school use these books and need a digital solution to grading?</p>
                <Button variant="raised" component="a" href="/contact-us">Contact Us</Button>

                
                </div>
            <br style={{clear: "both"}}/>
        </Paper>

    </div>
)

export default Home