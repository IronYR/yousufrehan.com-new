import { useRouter } from "next/router"
import React from 'react';
import Post from '../components/Post';
import Heading from '../components/Heading';

import { motion } from "framer-motion"
import Head from "next/head";
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
//       'Montserrat',
//       'sans-serif',
//     ].join(','),
//   },
// });
// const BLOG_POSTS_PATH = "../content/";

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    //@ts-ignore
    .context('../content/', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      // console.log(path);
      const markdown = await import(`../content/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
export async function getStaticProps() {
  const postsList = await importBlogPosts();
  // console.log(postsList);
  return { props: { posts: postsList } }
}
// import { serialize, deserialize } from "react-serialize"

// export async function getStaticProps({ params }) {
//   // let attributes, BaseComponent;
//   // let mds;
//   let md = await import("../content/" + params.postid + ".md");
//   return {
//     props: {
//       attributes: md.default.attributes,
//       html: md.default.html
//     }

//   }
// }

// export function getStaticPaths() {
//   // i have to give an arrat with post name
//   const postsDirectory = path.join(process.cwd(), 'content')
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allNames = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, '')
//     return {
//       params: { postid: id }
//     }
//   })
//   return {
//     paths: allNames,
//     fallback: false
//   }
// }
const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
let easing = [0.175, 0.85, 0.42, 0.96];

const headingVariants = {
  exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  },
  initial: { opacity: 0 },

}

export default function Home(props) {
  const { posts } = props;
  let router = useRouter();
  posts.sort((a, b) => {
    let dateA = new Date(Date.parse(a.attributes.date))
    let dateB = new Date(Date.parse(b.attributes.date))
    //@ts-ignore
    return dateB - dateA
  })
  // console.log(router);
  return (
    <React.Fragment>
      <Head>
        <title>YSFR's Blog</title>
        <meta property="og:title" content="YSFR's Blog"></meta>
        <meta name="description" content="Writing about books, productivity, tech and programming."></meta>
        <meta property="og:description" content="Writing about books, productivity, tech and programming."></meta>

        <link rel="canonical" href={`https://ysfr.dev/`}></link>
        <meta property="og:url" content={`https://ysfr.dev/`}></meta>
      </Head>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={headingVariants}>
          <Heading title="Writing whatever comes to my mind" />
        </motion.div>
        <hr color="#BE8080" />
        {posts?.map(post => {
          return (
            <div key={Math.random()}>
              <motion.div variants={postVariants}>
                <Post title={post.attributes.posttitle} date={post.attributes.date} slug={post.slug} />
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </React.Fragment >

  )
}
