import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import React from 'react'

export default function Heading(props) {
    return (
        <>
            {/* <Container style={{ margin: "20px auto", fontSize: 34 }}> */}
            <Paper variant="outlined" style={{ margin: "20px auto", fontSize: 34, backgroundColor: "inherit", color: "#BE8080", borderBottomWidth: "0" }}>
                {/* Writing about whatever comes to my mind */}
                {props.title == undefined || !props.title ? "Writing about whatever comes to my mind" : props.title}
                <br />
                {props.date &&
                    <span style={{ fontSize: 20, color: "#686363" }}>{props.date}</span>
                }
            </Paper>
            <hr color="#BE8080" />
            {/* </Container> */}
        </>
    )
}
