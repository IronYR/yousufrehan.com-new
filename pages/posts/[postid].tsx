import React from 'react'
import fs from "fs";
import path from "path";
// import { serialize, deserialize } from "react-serialize"
export async function getStaticProps({ params }) {
    // let attributes, BaseComponent;
    // let mds;
    let md = await import("../../content/" + params.postid + ".md");
    // .then(md => {
    //     mds = md
    //     // attributes = md.default.attributes;
    //     // BaseComponent = md.default.react;
    // })
    return {
        // props: { attributes, BaseComponent }
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
        const id = fileName.replace(/\.md$/, '')
        return {
            params: { postid: id }
        }
    })
    return {
        paths: allNames,
        fallback: false
    }
}
export default function all(props) {
    console.log(props);
    return (
        <div>
            <div>
                <p>sfdfsdfsdfsd</p>
                <p>{props?.attributes.title}</p>
                <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
                {/* {Compon()}
                <Compon /> */}
                {/* <func /> */}
                {/* <p>{post.attributes.title}</p> */}
            </div>

        </div>
    )
}



// stuck trying to find a way to pass functions to the component. Or other ways to loop throuht the elements loading each one and using them according to the id in th linnk