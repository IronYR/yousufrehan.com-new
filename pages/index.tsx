import { useRouter } from "next/router"
import React from 'react';
import Post from '../components/Post';
import Heading from '../components/Heading';
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
export default function Home(props) {
  const { posts } = props;
  let router = useRouter();
  // console.log(router);
  return (
    <React.Fragment>
      <Heading title="Writing whatever comes to my mind" />
      {posts?.map(post => {
        return (
          <div key={Math.random()}>
            <Post title={post.attributes.posttitle} date={post.attributes.date} slug={post.slug} />
          </div>
        )
      })}
      {/* // <ThemeProvider theme={theme}> */}
      {/* <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" />
      <Post title="Schools make kids less creative" tags={["Rants", "Essay"]} date="20 December, 2021" /> */}
      {/* // </ThemeProvider> */}
    </React.Fragment >

  )
}
