import '../styles/globals.css'
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <Layout title={pageProps.attributes?.title}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
