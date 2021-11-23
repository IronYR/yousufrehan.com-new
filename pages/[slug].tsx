import React from 'react'
import fs from "fs";
import path from "path";
import Heading from '../components/Heading';
import { motion } from "framer-motion"
import Head from "next/head"
//@ts-ignore
import classes from "../styles/github-markdown.module.css"
// import { serialize, deserialize } from "react-serialize"
export async function getStaticProps(ctx) {
    // let attributes, BaseComponent;
    let { params } = ctx;
    // console.log(ctx);
    // let mds;
    let md = await import("../content/" + params.slug + ".md");
    // console.log(md);
    return {
        props: {
            attributes: md.default.attributes,
            html: md.default.html
        }

    }
}
export function getStaticPaths() {
    // i have to give an arrat with post name
    const postsDirectory = path.join(process.cwd(), 'content')
    const fileNames = fs.readdirSync(postsDirectory)
    const allNames = fileNames.map((fileName) => {
        const trimmedName = fileName.substring(0, fileName.length - 3);
        return {
            params: { slug: trimmedName }
        }
    })
    return {
        paths: allNames,
        fallback: false
    }
}
let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
};
const headingVariants = {
    exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
}
export default function all(props) {
    let date = new Date(Date.parse(props.attributes.date)).toDateString()

    return (
        <div>
            <Head>
                <title>{props.attributes.posttitle}</title>
                <meta property="og:title" content={props.attributes.posttitle}></meta>
                <meta name="description" content={props.attributes.description} />
                <meta property="og:description" content={props.attributes.description} />
                <meta property="og:type" content="article"></meta>
                <meta property="article:modified_time" content={props.attributes.date}></meta>
                <link rel="canonical" href={`https://yousufrehan.com/${props.attributes.title}`}></link>
                <meta property="og:url" content={`https://yousufrehan.com/${props.attributes.title}`}></meta>
            </Head>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div variants={headingVariants}>
                    <Heading title={props.attributes.posttitle} date={date} />
                </motion.div>
                <hr color="#BE8080" />
                <motion.div variants={textVariants}>

                    <div style={{ fontSize: "auto", lineHeight: "auto", color: "white" }}>
                        {/* <p>{props?.attributes?.title}</p> */}
                        <div
                            className={classes["markdown-body"]}
                            style={{
                                color: "white",
                                lineHeight: "2",
                                fontSize: "1.1rem",
                                fontFamily: "Montserrat",
                                letterSpacing: "0.25px"
                            }}
                            dangerouslySetInnerHTML={{ __html: props?.html }}
                        />
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}



// stuck trying to find a way to pass functions to the component. Or other ways to loop throuht the elements loading each one and using them according to the id in th linnk