import React from 'react'
import Heading from "../components/Heading"
import { motion } from "framer-motion"
import Head from 'next/head';
let easing = [0.175, 0.85, 0.42, 0.96];
const headingVariants = {
    exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
}
const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
};
export default function about() {
    return (
        <React.Fragment>
            <Head>
                <title>About Yousuf Rehan</title>
                <meta property="og:title" content="About Yousuf Rehan"></meta>
                <meta name="description" content="Ocassionally write"></meta>
                <meta property="og:description" content="Ocassionally write"></meta>
                <link rel="canonical" href={`https://yousufrehan.com/about`}></link>
                <meta property="og:url" content={`https://yousufrehan.com/about`}></meta>
            </Head>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div variants={headingVariants}>
                    <Heading title="About me" />
                </motion.div>
                <hr color="#BE8080" />
                <motion.div variants={textVariants}>
                    <p style={{ fontSize: "1.4rem" }}>Occasionally write</p>
                </motion.div>
            </motion.div>
        </React.Fragment>
    )
}
