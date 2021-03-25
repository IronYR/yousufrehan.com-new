import React from 'react'
import fs from "fs";
import path from "path";
import Heading from '../components/Heading';
import { motion } from "framer-motion"
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
export default function all(props) {
    let date = new Date(Date.parse(props.attributes.date)).toDateString()
    // console.log(props);
    return (
        <div>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div variants={textVariants}>
                    <Heading title={props.attributes.posttitle} date={date} />
                    <div style={{ fontSize: "1.3rem", lineHeight: 2 }}>
                        {/* <p>{props?.attributes?.title}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: props?.html }}></div>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}



// stuck trying to find a way to pass functions to the component. Or other ways to loop throuht the elements loading each one and using them according to the id in th linnk