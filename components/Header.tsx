import React from 'react';
import Link from "next/link"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
    links: {
        margin: "0px 10px",
        fontWeight: "normal"
    }
}));

export default function Header(props) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                "Montserrat",
                "sans-serif"
            ].join(", ")
        }
    })
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" color="transparent">
                <Toolbar>
                    {/* <ThemeProvider theme={theme}> */}
                    <Typography variant="h4" className={classes.title}>
                        <Link href="#"><a>YR</a></Link>
                    </Typography>
                    <Typography variant="h6" className={classes.links}>
                        <Link href="#"><a /* style={{ color: "white" }}*/ className="primary">Home</a></Link>
                    </Typography>
                    {/* <Typography variant="h6" className={classes.links}>
                            <Link href="#"><a className="primary">Blog</a></Link>
                        </Typography> */}
                    <Typography variant="h6" className={classes.links}>
                        <Link href="#"><a className="primary">About</a></Link>
                    </Typography>
                    {/* </ThemeProvider> */}

                </Toolbar>
            </AppBar>
            <Container style={{ margin: "20px auto", fontSize: 34 }}>
                <Paper variant="outlined" style={{ backgroundColor: "inherit", color: "#BE8080", borderBottomWidth: "0" }}>
                    {/* Writing about whatever comes to my mind */}
                    {props.title}
                </Paper>
                <hr color="#BE8080" />
            </Container>
        </div>
    );
}