
import Layout from '../component/layout'
import '../styles/globals.css'
import '../styles/icon.css'
import '../styles/layout.css'
import '../styles/hero.css'
import '../styles/navbar.css'
import '../styles/about.css'
import '../styles/skill-box.css'
import '../styles/contact.css'
import '../styles/offcanvas.css'
import '../styles/single-project.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
