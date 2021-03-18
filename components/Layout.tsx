import { Container } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function Layout({ children }) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                "Montserrat",
                "sans-serif"
            ].join(", ")
        }
    })
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Header /*title={title}*/ />
                <Container>
                    {children}
                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}
