import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import React from 'react';
import Post from '../components/Post';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});
export default function Home() {
  return (
    <React.Fragment>

      {/* // <ThemeProvider theme={theme}> */}
      <Header />
      <Container className={styles.container}>
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
        <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      </Container>
      {/* // </ThemeProvider> */}
    </React.Fragment>

  )
}
