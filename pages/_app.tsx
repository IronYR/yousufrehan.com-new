import '../styles/globals.css'
import Layout from "../components/Layout"
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  if (router.asPath == "/is") return (
    <Component {...pageProps} key={router.route} />
  )
  return (
    <Layout /*title={pageProps.attributes?.posttitle}*/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
