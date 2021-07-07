
import Layout from '../component/layout'
import '../styles/globals.css'
import '../styles/icon.css'
import '../styles/layout.css'
import '../styles/hero.css'
import '../styles/navbar.css'
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
